export default (message) => {
  if (import.meta.env.MODE === 'test') { return }
  if (typeof message === 'object') {
    console.dir(message)
  } else {
    console.log(message)
  }
}
