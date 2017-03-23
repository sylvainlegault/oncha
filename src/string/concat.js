import compose from 'compose'
import map from 'array/map'
import parse from 'string/parse'

// parseArgs :: [Any] -> [String]
const parseArgs = map(parse)

// concat :: [String] -> String
const concat = args =>
  args.reduce((accumulator, item) => accumulator.concat(item), '')

// concat :: String, ... -> String
export default (...args) => compose(concat, parseArgs)(args)
