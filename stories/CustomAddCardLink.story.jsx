import React from 'react'

import Board from '../src'
import data from './data/collapsible.json'

const CustomAddCardLink =  ({onClick, t}) => <button onClick={onClick}>{t('Click to add card')}</button>

export default {title: 'Custom Components'}

export const AddCardLink = {
  render: () => {
      return <Board data={data} editable components={{AddCardLink: CustomAddCardLink}} />
  }
}
