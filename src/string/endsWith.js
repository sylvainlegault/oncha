import compose from 'compose'
import parse from 'string/parse'

// endsWith :: String -> (String -> String)
const endsWith = searchString => str => str.endsWith(searchString)

// endsWith :: String -> (String -> String)
export default searchString => compose(endsWith(searchString), parse)
