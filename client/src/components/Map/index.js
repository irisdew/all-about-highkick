import React from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import coseBilkent from 'cytoscape-cose-bilkent';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';

const data = [
  // node
  { data: { id: '1', label: '나문희' } },
  { data: { id: '2', label: '이순재' } },
  { data: { id: '3', label: '박해미' } },
  { data: { id: '4', label: '이준하' } },
  { data: { id: '5', label: '이민호' } },
  { data: { id: '6', label: '이윤호' } },
  // edge
  { data: { id: '201', source: '2', target: '1' } },
  { data: { id: '301', source: '3', target: '1' } },
  { data: { id: '401', source: '4', target: '1' } },
  { data: { id: '501', source: '5', target: '1' } },
  { data: { id: '605', source: '6', target: '5' } },
  { data: { id: '503', source: '5', target: '3' } },
  { data: { id: '204', source: '2', target: '4' } },
];

Cytoscape.use(coseBilkent);

export default function Map() {
  const cy_for_rank = Cytoscape({
    elements: data,
  });

  const pageRank = cy_for_rank.elements().pageRank();
  // elements들의 rank들입니다.

  const nodeMaxSize = 50;
  const nodeMinSize = 5;
  const fontMaxSize = 8;
  const fontMinSize = 5;

  const style = [
    // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(label)',
        width: function (ele) {
          return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
        },
        height: function (ele) {
          return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
        },
        'font-size': function (ele) {
          return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
        },
      },
    },

    {
      selector: 'edge',
      style: {
        width: 3,
        'curve-style': 'bezier',
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'vee',
        'source-arrow-color': '#ccc',
        'source-arrow-shape': 'triangle',
      },
    },

    {
      selector: '#1',
      style: {
        // shape: 'roundrectangle',
        'background-image': one,
        'background-fit': 'cover',
      },
    },
    {
      selector: '#2',
      style: {
        // shape: 'roundrectangle',
        'background-image': two,
        'background-fit': 'cover',
      },
    },
    {
      selector: '#3',
      style: {
        // shape: 'roundrectangle',
        'background-image': three,
        'background-fit': 'cover',
      },
    },
    {
      selector: '#4',
      style: {
        // shape: 'roundrectangle',
        'background-image': four,
        'background-fit': 'cover',
      },
    },
    {
      selector: '#5',
      style: {
        // shape: 'roundrectangle',
        'background-image': five,
        'background-fit': 'cover',
      },
    },
    {
      selector: '#6',
      style: {
        // shape: 'roundrectangle',
        'background-image': six,
        'background-fit': 'cover',
      },
    },
  ];

  const layout = {
    name: 'cose-bilkent',
    animate: false,
    gravityRangeCompound: 1.5,
    fit: true,
    tile: true,
  };

  return (
    <>
      <CytoscapeComponent
        elements={data}
        style={{ width: '100%', height: '100%' }}
        stylesheet={style}
        layout={layout}
        zoom={1}
      />
      />
    </>
  );
}
