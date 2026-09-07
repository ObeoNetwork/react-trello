import React, {useRef} from 'react'
import {Provider} from 'react-redux'
import classNames from 'classnames'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import uuidv1 from 'uuid/v1'
import BoardContainer from './BoardContainer'
import DefaultComponents from '../components'
import createTranslate from 'rt/helpers/createTranslate'
import boardReducer from 'rt/reducers/BoardReducer'

const middlewares = typeof process !== 'undefined' && process.env && process.env.REDUX_LOGGING ? [logger] : []

export default function Board(props) {
  const {id, className, components} = props
  const storeRef = useRef(null)
  const idRef = useRef(id || uuidv1())

  if (!storeRef.current) {
    // When you create multiple boards, unique stores are created for isolation.
    storeRef.current = createStore(boardReducer, applyMiddleware(...middlewares))
  }

  const boardComponents = {...DefaultComponents, ...components}
  const allClassNames = classNames('react-trello-board', className || '')

  return (
    <Provider store={storeRef.current}>
      <>
        <boardComponents.GlobalStyle />
        <BoardContainer
          id={idRef.current}
          {...props}
          components={boardComponents}
          className={allClassNames}
        />
      </>
    </Provider>
  )
}
