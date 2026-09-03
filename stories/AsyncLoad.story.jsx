import React, {Component} from 'react'

import Board from '../src'
import data from './data/base.json'

class AsyncBoard extends Component {
  state = {boardData: {lanes: [{id: 'loading', title: 'loading..', cards: []}]}}

  componentDidMount() {
    setTimeout(this.getBoard.bind(this), 1000)
  }

  getBoard() {
    this.setState({boardData: data})
  }

  render() {
    return <Board data={this.state.boardData} />
  }
}

export default {title: 'Advanced Features'}

export const AsyncLoadData = {
  name: 'Async Load data',
  render: () => <AsyncBoard />,
  parameters: {docs: {description: {story: 'Load board data asynchronously after the component has mounted'}}}
}
