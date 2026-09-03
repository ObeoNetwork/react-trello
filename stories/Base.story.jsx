import React from 'react'

import Board from '../src'
import data from './data/base.json'

export default {title: 'Basic Functions'}

export const FullBoardExample = {
  name: 'Full Board example',
  render: () => <Board data={data} />,
  parameters: {docs: {description: {story: 'A complete Trello board with multiple lanes fed as json data'}}}
}
