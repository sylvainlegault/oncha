import compose from 'compose'
import parse from 'string/parse'

// trim :: String -> (String -> String)
export default compose(s => s.trim(), parse)
