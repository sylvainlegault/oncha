import compose from 'compose'

const log = args => (console.log(...args), args) // eslint-disable-line

const firstOrArgsArray = args => args.length === 1 ? args[0] : args

const undefinedOrArgsArray = args => args.length === 0 ? args[0] : args

const returnArgs = compose(undefinedOrArgsArray, firstOrArgsArray, log)

// log :: ...Any -> Any
export default (...args) => returnArgs(args)
