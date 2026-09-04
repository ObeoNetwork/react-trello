import get from 'lodash/get.js'
export default (TABLE) => (key) => get(TABLE, key)
