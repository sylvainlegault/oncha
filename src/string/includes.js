import compose from 'compose'
import parse from 'string/parse'

// includes :: String -> (String -> String)
const includes = searchString => str => str.includes(searchString)

// includes :: String -> (String -> String)
export default searchString => compose(includes(searchString), parse)
