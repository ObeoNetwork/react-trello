import React from 'react'

import Board from '../src'
import data from './data/collapsible.json'

const LaneFooter = ({onClick, collapsed}) => <div onClick={onClick}>{collapsed ? 'click to expand' : 'click to collapse'}</div>

export default {title: 'Custom Components'}

export const CustomLaneFooter = {
  name: 'LaneFooter',
  render: () => <Board collapsibleLanes components={{LaneFooter}} data={data} />
}
