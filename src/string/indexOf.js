import compose from 'compose'
import parse from 'string/parse'

// indexOf :: String -> (String -> String)
const indexOf = searchString => str => str.indexOf(searchString)

// indexOf :: String -> (String -> String)
export default searchString => compose(indexOf(searchString), parse)
