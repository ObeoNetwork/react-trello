import React from 'react'

import Board from '../src'
import data from './data/base.json'

import './board.css'

export default {title: 'Styling'}

export const BoardStyling = {
  render: () => <Board data={data} style={{padding: '30px 20px', fontFamily: 'Verdana'}} className="boardContainer" />,
  parameters: {docs: {description: {story: 'Change the background and other CSS styles for the board container'}}}
}

const dataWithLaneStyles = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      label: '20/70',
      style: {width: 280, backgroundColor: '#3179ba', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
      cards: [
        {
          id: 'Milk',
          title: 'Buy milk',
          label: '15 mins',
          description: '2 Gallons of milk at the Deli store',
        },
        {
          id: 'Plan2',
          title: 'Dispose Garbage',
          label: '10 mins',
          description: 'Sort out recyclable and waste as needed'
        }
      ]
    },
    {
      id: 'DONE',
      title: 'Doned tasks',
      label: '10/70',
      style: {width: 280, backgroundColor: '#ba7931', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
      cards: [
        {
          id: 'burn',
          title: 'Burn Garbage',
          label: '10 mins',
          description: 'Sort out recyclable and waste as needed'
        },
      ]
    },
    {
      id: 'ARCHIVE',
      title: 'Archived tasks',
      label: '1/2',
      cards: [
        {
          id: 'archived',
          title: 'Archived',
          label: '10 mins',
        },
      ]
    }
  ]
}

export const LaneStyling = {
  render: () => <Board data={dataWithLaneStyles} laneStyle={{backgroundColor: '#666'}} style={{backgroundColor: '#eee'}} />,
  parameters: {docs: {description: {story: 'Change the look and feel of the lane'}}}
}

const dataWithCardStyles = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      label: '20/70',
      cards: [
        {
          id: 'Milk',
          title: 'Buy milk',
          label: '15 mins',
          description: '2 Gallons of milk at the Deli store',
          style: { backgroundColor: '#eec' },
        },
        {
          id: 'Plan2',
          title: 'Dispose Garbage',
          label: '10 mins',
          description: 'Sort out recyclable and waste as needed'
        },
        {
          id: 'Plan3',
          title: 'Burn Garbage',
          label: '20 mins'
        }
      ]
    }
  ]
}

export const CardStyling = {
  render: () => <Board data={dataWithCardStyles} cardStyle={{backgroundColor: '#ffe'}} />,
  parameters: {docs: {description: {story: 'Change the background of cards'}}}
}
