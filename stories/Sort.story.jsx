import React from 'react'

import Board from '../src'
import data from './data/data-sort.json'

export default {title: 'Basic Functions'}

export const SortedLane = {
  render: () => <Board data={data} laneSortFunction={(card1, card2) => new Date(card1.metadata.completedAt) - new Date(card2.metadata.completedAt)} />,
  parameters: {docs: {description: {story: 'A lane sorted by completed at ascending'}}}
}

export const ReverseSortedLane = {
  render: () => <Board data={data} laneSortFunction={(card1, card2) => new Date(card2.metadata.completedAt) - new Date(card1.metadata.completedAt)} />,
  parameters: {docs: {description: {story: 'A lane sorted by completed at descending'}}}
}
