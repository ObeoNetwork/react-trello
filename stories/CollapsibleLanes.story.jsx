import React from 'react'
import debug from './helpers/debug'
import data from './data/collapsible.json'

import Board from '../src'

export default {title: 'Advanced Features'}

export const CollapsibleLanes = {
  name: 'Collapsible Lanes',
  render: () => {
    const shouldReceiveNewData = nextData => {
      debug('data has changed')
      debug(nextData)
    }

    return <Board data={data} draggable collapsibleLanes onDataChange={shouldReceiveNewData} />
  },
  parameters: {docs: {description: {story: 'Collapse lanes when double clicking on the lanes'}}}
}
