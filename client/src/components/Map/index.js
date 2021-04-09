import React from 'react';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import COSEBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use(COSEBilkent);

export default function Map() {
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    { data: { id: 'three', label: 'Node 3' }, position: { x: 100, y: 0 } },
    {
      data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' },
    },
    {
      data: {
        source: 'one',
        target: 'three',
        label: 'Edge from Node1 to Node3',
      },
    },
  ];

  const layout = { name: 'cose-bilkent' };

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: '100%', height: '100%' }}
      //   stylesheet={[
      //     {
      //       selector: 'node',
      //       style: {
      //         width: 20,
      //         height: 20,
      //         shape: 'rectangle',
      //       },
      //     },
      //     {
      //       selector: 'edge',
      //       style: {
      //         width: 15,
      //       },
      //     },
      //   ]}
      layout={layout}
      zoom={1}
    />
  );
}
