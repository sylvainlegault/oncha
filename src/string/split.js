import safe from 'safe'

// split :: String -> (String -> String)
export default c => safe(s => s.split(c))
