import React from 'react'
import debug from './helpers/debug'
import data from './data/base.json'

import Board from '../src'

export default {title: 'Drag-n-Drop'}

export const Basic = {
  render: () => {
      const handleDragStart = (cardId, laneId) => {
        debug('drag started')
        debug(`cardId: ${cardId}`)
        debug(`laneId: ${laneId}`)
      }

      const handleDragEnd = (cardId, sourceLaneId, targetLaneId, position, card) => {
        debug('drag ended')
        debug(`cardId: ${cardId}`)
        debug(`sourceLaneId: ${sourceLaneId}`)
        debug(`targetLaneId: ${targetLaneId}`)
        debug(`newPosition: ${position}`)
        debug(`cardDetails:`)
        debug(card)
      }

      const handleLaneDragStart = laneId => {
        debug(`lane drag started for ${laneId}`)
      }

      const handleLaneDragEnd = (removedIndex, addedIndex, {id}) => {
        debug(`lane drag ended from position ${removedIndex} for laneId=${id}`)
        debug(`New lane position: ${addedIndex}`)
      }

      const shouldReceiveNewData = nextData => {
        debug('data has changed')
        debug(nextData)
      }

      const onCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, addedIndex) => {
        debug(`onCardMoveAcrossLanes: ${fromLaneId}, ${toLaneId}, ${cardId}, ${addedIndex}`)
      }

      return (
        <Board
          data={data}
          draggable
          onCardMoveAcrossLanes={onCardMoveAcrossLanes}
          onDataChange={shouldReceiveNewData}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleLaneDragStart={handleLaneDragStart}
          handleLaneDragEnd={handleLaneDragEnd}
        />
      )
  },
  parameters: {docs: {description: {story: 'A demonstration of onDragStart and onDragEnd hooks for cards and lanes'}}}
}

export const DragStyling = {
  render: () => {
      return <Board data={data} cardDragClass="draggingCard" laneDragClass="draggingLane" draggable />
  },
  parameters: {docs: {description: {story: 'Modifying appearance of dragged card'}}}
}
