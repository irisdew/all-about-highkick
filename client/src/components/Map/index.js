import React from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import coseBilkent from 'cytoscape-cose-bilkent';
import two from './2.jpg';

const data = [
  // node
  { data: { id: '1', label: '나문희' } },
  { data: { id: '2', label: '이순재' } },
  { data: { id: '3', label: '박해미' } },
  { data: { id: '4', label: '이준하' } },
  { data: { id: '5', label: '이민호' } },
  { data: { id: '6', label: '이윤호' } },
  // edge
  { data: { id: '102', source: '1', target: '2' } },
  { data: { id: '304', source: '3', target: '4' } },
  { data: { id: '104', source: '1', target: '4' } },
];

const cy_for_rank = Cytoscape({
  elements: data,
});

Cytoscape.use(coseBilkent);

export default function Map() {
  const elements = [
    // node
    { data: { id: '1', label: '나문희' } },
    { data: { id: '2', label: '이순재' } },
    { data: { id: '3', label: '박해미' } },
    { data: { id: '4', label: '이준하' } },
    { data: { id: '5', label: '이민호' } },
    { data: { id: '6', label: '이윤호' } },
    // edge
    { data: { id: '102', source: '1', target: '2' } },
    { data: { id: '304', source: '3', target: '4' } },
    { data: { id: '104', source: '1', target: '4' } },
  ];

  const style = [
    // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(label)',
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
      selector: '#2',
      style: {
        // shape: 'roundrectangle',
        'background-image': two,
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
    <CytoscapeComponent
      elements={elements}
      style={{ width: '100%', height: '100%' }}
      stylesheet={style}
      layout={layout}
      zoom={1}
    />
  );
}
