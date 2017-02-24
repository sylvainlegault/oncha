import Id from 'id'
// log :: ...Any -> Any
export default (...args) =>
  Id((console.log(...args), args)) // eslint-disable-line
    .map(args => args.length === 1 ? args[0] : args)
    .fold(args => args.length === 0 ? args[0] : args)
