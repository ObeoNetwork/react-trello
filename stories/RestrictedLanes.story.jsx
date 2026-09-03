import React from 'react'

import Board from '../src'
import data from './data/drag-drop.json'

export default {title: 'Drag-n-Drop'}

export const RestrictLanes = {
  render: () => {
    return <Board data={data} draggable />
  },
  parameters: {docs: {description: {story: 'Use droppable property to prevent some lanes from being droppable'}}}
}

export const DragCardsNotLanes = {
  name: 'Drag Cards not Lanes',
  render: () => {
    return <Board data={data} draggable laneDraggable={false} />
  },
  parameters: {docs: {description: {story: 'Use props to disable dragging lanes but enable card dragging'}}}
}
