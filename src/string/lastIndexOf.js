import compose from 'compose'
import parse from 'string/parse'

// lastIndexOf :: String -> (String -> String)
const lastIndexOf = searchString => str => str.lastIndexOf(searchString)

// lastIndexOf :: String -> (String -> String)
export default searchString => compose(lastIndexOf(searchString), parse)
