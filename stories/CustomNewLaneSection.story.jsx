import React from 'react'

import Board from '../src'
import data from './data/data-sort.json'

const NewLaneSection = ({t, onClick}) => <button onClick={onClick}>{t('Add another lane')}</button>

export default {title: 'Custom Components'}

export const CustomNewLaneSection = {
  name: 'NewLaneSection',
  render: () => <Board editable canAddLanes components={{NewLaneSection}} data={data} />
}
