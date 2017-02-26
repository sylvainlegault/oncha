import compose from 'compose'
import parse from 'string/parse'

// toUpperCase :: [String] -> String
const toUpperCase = str => str.toUpperCase()

// toUpperCase :: String -> String
export default compose(toUpperCase, parse)
