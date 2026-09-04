import React, {Component} from 'react'
import debug from './helpers/debug'
import data from './data/base.json'
import smallData from './data/data-sort.json'

import Board from '../src'

const disallowAddingCardData =  {...data}
disallowAddingCardData.lanes[0].title = 'Disallowed adding card'
disallowAddingCardData.lanes[0].disallowAddingCard = true

export default {title: 'Editable Board'}

export const AddDeleteCards = {
  name: 'Add/Delete Cards',
  render: () => {
      const shouldReceiveNewData = nextData => {
        debug('Board has changed')
        debug(nextData)
      }

      const handleCardDelete = (cardId, laneId) => {
        debug(`Card: ${cardId} deleted from lane: ${laneId}`)
      }

      const handleCardAdd = (card, laneId) => {
        debug(`New card added to lane ${laneId}`)
        debug(card)
      }

      return (
        <Board
          data={data}
          draggable
          id="EditableBoard1"
          onDataChange={shouldReceiveNewData}
          onCardDelete={handleCardDelete}
          onCardAdd={handleCardAdd}
          onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
          editable
        />
      )
  },
  parameters: {docs: {description: {story: 'Add/delete cards or delete lanes'}}}
}

export const AddNewLane = {
  render: () => {
      return (
        <Board
          data={smallData}
          editable
          canAddLanes
          onLaneAdd={t => debug('You added a line with title ' + t.title)}
        />
      )
  },
  parameters: {docs: {description: {story: 'Allow adding new lane'}}}
}

export const DisallowAddingCardForSpecificLane = {
  name: 'Disallow Adding Card for specific Lane',
  render: () => {
      return (
        <Board
          data={disallowAddingCardData}
          editable
        />
      )
  },
  parameters: {docs: {description: {story: 'Can hide the add card button on specific lanes'}}}
}

export const InlineEditLaneTitleAndCards = {
  name: 'Inline Edit Lane Title and Cards',
  render: () => {
      return (
        <Board
          data={smallData}
          editable
          canAddLanes
          editLaneTitle
          onCardUpdate={ (cardId, data) => debug(`onCardUpdate: ${cardId} -> ${JSON.stringify(data, null, 2)}`)}
          onLaneUpdate={ (laneId, data) => debug(`onLaneUpdate: ${laneId} -> ${data.title}`)}
          onLaneAdd={t => debug('You added a line with title ' + t.title)}
        />
      )
  },
  parameters: {docs: {description: {story: 'Allow editing lane titles and cards'}}}
}
