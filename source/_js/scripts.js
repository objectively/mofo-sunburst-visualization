import { arc } from 'd3-shape';
import { hierarchy, partition } from 'd3-hierarchy';
import { select, selectAll } from 'd3-selection';
import { json } from 'd3-fetch';

const d3 = Object.assign(
  {},
  {
    arc,
    hierarchy,
    json,
    partition,
    select,
    selectAll
  }
);

const width = 500;
const height = 500;
const radius = Math.min(width, height) / 10.3;

const setPartition = data => {
  const root = d3.hierarchy(data)
    .sum(d => (d.children || d.count))
  return d3.partition().size([2 * Math.PI, root.height + 1])(root);
};

const setArc = d3.arc()
  .startAngle(d => d.x0)
  .endAngle(d => d.x1)
  .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005 - 500))
  .padRadius(0)
  .innerRadius(d => d.y0 * radius + 55)
  .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius + 55));

// Tooltips and html formatting
const tooltips = d3
  .select('.sunburst-text')
  .append('div')
  .attr('class', 'row tooltips');

const formatHTML = d => {
  const layer = d.depth;
  const { data } = d;

  if (layer === 1) {
    let awardAmount = Math.round(data.totalAwardAmount * 100) / 100;
    awardAmount = awardAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    tooltips.html(
      `<div class="column large-12 small-12">
        <h2 class="title">${data.name}</h2>
      </div>
      <div class="column large-5 small-12">
        <h3>Strategy/Focus</h3>
        <h4>${data.focus}</h4>
        <p>${data.description}</p>
      </div>
      <div class="column large-7 small-12">
        <h3>Types of Programs</h3>
        <p>${data.children.length}</p>
        <h3>Total Award Amount</h3>
        <p>$${awardAmount}</p>
        <h3>Countries Represented</h3>
        <p>${data.awardedCountries.length}</p>
      </div>`
    );
  } else if (layer === 2) {
    let issueAreaHTML = '';

    data.children.forEach(issueArea => {
      issueAreaHTML += `<p>${issueArea.name}</p>`;
    });

    tooltips.html(
      `<div class="column large-12 small-12">
        <span class="parent-data">${d.parent.data.name}</span>
        <h2 class="title">${data.name}</h2>
      </div>
      <div class="column large-5 small-12">
        <h3>Program Focus</h3>
        <p>${data.purpose}</p>
      </div>
      <div class="column large-7 small-12">
        <h3>Geographic Focus</h3>
        <p>${data.allCountriesPerType.sort().join(', ')}</p>
        <h3>Number of Awards</h3>
        <p>${data.count}</p>
        <h3>Internet Health Issues</h3>
        ${issueAreaHTML}
      </div>`
    );
  } else if (layer === 3) {
    let html = '';

    data.primaryOutput.forEach(output => {
      html += `<p>${output}</p>`;
    });

    tooltips.html(
      `<div class="column large-12 small-12">
        <span class="parent-data">${d.parent.parent.data.name} | ${d.parent.data.name}</span>
        <h2 class="title">${data.name}</h2>
      </div>
      <div class="column large-5 small-12">
        <h3>Summary</h3>
        <p>${data.description}</p>
      </div>
      <div class="column large-7 small-12">
        <h3>Number of Awards</h3>
        <p>${data.count}</p>
        <h3>Types of Outputs</h3>
        <p>${html}</p>
      </div>`
    );
  }
};

// Highlight on hover
const getAncestors = node => {
  const path = [];
  let current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
};

const highlightSequence = d => {
  const sequenceArray = getAncestors(d);
  d3.selectAll('path')
    .filter(node => sequenceArray.indexOf(node) < 0)
    .classed('ancestor', true);
};

const removeHighlight = d => {
  const sequenceArray = getAncestors(d);
  d3.selectAll('path')
    .filter(node => sequenceArray.indexOf(node) < 0)
    .classed('ancestor', false);
};

const highlightLabel = d => {
  const allLabels = document.querySelectorAll('.label');
  let depth = d.depth;
  let label;

  switch(depth) {
    case 1:
      label = d.data.name;
      break;
    case 2:
      label = d.parent.data.name;
      break;
    case 3:
      label = d.parent.parent.data.name;
      break;
  }

  allLabels.forEach(label => {
    label.classList.add('label-inactive');
  });

  let foundLabel = document.querySelector(`.label-${label}`)
  foundLabel.classList.add('label-active');
};

// Specify colors
const colors = {
  '2016': '#CCCCCC',
  '2017': '#CCCCCC',
  '2018': '#CCCCCC',
  '2019': '#CCCCCC',
  '2020': '#CCCCCC',
  'Advocacy Network Fund': '#277da1',
  'Creative Media Awards': '#f9844a',
  'Data Futures Lab': '#577590',
  'Discretionary Awards': '#f8961e',
  'Fellows in Residence/Senior Fellows': '#4d908e',
  'Gigabit Community Fund': '#f3722c',
  'Hive': '#43aa8b',
  'MOSS (Mozilla Open Source Support)': '#f94144',
  'Mozilla Science Mini Grants': '#c43437',
  'NSF WINS (Wireless Innovations for a Networked Society Challenge)': '#f9c74f',
  'Open Internet Engineering Fellowship': '#af376b',
  'Open News Fellowship': '#2d5480',
  'Open Science Fellowship': '#662d91',
  'Open Web Fellowship': '#234061',
  'OpenDOTT Fellowship': '#485399',
  'Other Programs': '#1e3753',
  'Responsible Computer Science Challenge': '#39669c',
  'Tech + Society Fellowship': '#15273c',
  'Tech Policy Fellowship': '#471f61',
  'Privacy + Security': '#1a1a49',
  'Open Innovation': '#31315c',
  'Digital Inclusion': '#48486d',
  'Web Literacy': '#5f5f80',
  'Decentralization': '#767692',
  'Trustworthy AI': '#8c8ca3',
  'Other/unavailable': '#a3a3b6'
};

d3.json(`${window.location.origin + window.location.pathname}/data/sunburst-data.json`).then(data => {
  const root = setPartition(data);
  root.each(d => d.current = d);

  const svg = d3
    .select('svg#sunburst')
    .attr('viewBox', `0, 0, ${width} ${height}`)
    .attr('width', width)
    .attr('height', height);

  const g = svg.append('g').attr('transform', `translate(${width / 2},${width / 2})`);

  g
    .selectAll('path')
    .data(root.descendants().slice(1))
    .join('path')
    .attr('d', d => setArc(d.current))
    .attr('class', d => `layer-${d.depth}`)
    .style('fill', d => colors[d.data.name])
    .style('stroke', '#FFF')
    .style('stroke-width', 1)
    .on('mouseover', (e, d) => {
      document.querySelector('.large-text').style.display = 'none';
      formatHTML(d);
      highlightSequence(d);
      highlightLabel(d)
      g
        .append('text')
        .attr('class', 'sunburst-center-text')
        .text('Clear')
        .style('fill', '#bbbbbb')
        .style('font-size', '2rem')
        .attr('x', -40)
        .attr('y', 10)
        .on('mouseover', () => {
          g.select('.sunburst-center-text').remove();
        });
    })
    .on('mouseleave', d => {
      removeHighlight(d);
      tooltips.html('');
      document.querySelector('.large-text').style.display = 'block';
      g.select('.sunburst-center-text').remove();
      const allLabels = document.querySelectorAll('.label');

      allLabels.forEach(label => {
        label.classList.remove('label-active', 'label-inactive');
      });
    });

  const labelTransform = d => {
    const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
    const y = (d.y0 + d.y1) / 2 * radius;
    return `rotate(${x - 90}) translate(${y + 48},0) rotate(90)`;
  }

  const label = g.append('g')
    .selectAll('text')
    .data(root.descendants().slice(1))
    .join('text')

  label
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .style('user-select', 'none')
    .attr('transform', d => labelTransform(d.current))
    .attr('class', d => `label label-${d.depth} label-${d.data.name}`)
    .text(d => d.data.name)
})
  .catch((error) => {
    console.error('Error loading the data');
  });