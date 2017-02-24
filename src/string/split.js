import compose from 'compose'
import parse from 'string/parse'

// split :: String -> (String -> String)
export default c => compose(s => s.split(c), parse)
