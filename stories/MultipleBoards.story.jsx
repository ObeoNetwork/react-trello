import React from 'react'

import Board from '../src'
import data1 from './data/base.json'
import data2 from './data/other-board.json'

const containerStyles = {
  height: 500,
  padding: 20
}

export default {title: 'Multiple Boards'}

export const TwoBoards = {
  render: () => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={containerStyles}>
          <Board id="board1" data={data1} draggable />
        </div>
        <div style={containerStyles}>
          <Board id="board2" data={data2} draggable />
        </div>
      </div>
    )
  },
  parameters: {docs: {description: {story: 'Have two boards rendering their own data'}}}
}
