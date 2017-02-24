import safe from 'safe'

// trim :: String -> (String -> String)
export default safe(s => s.trim())
