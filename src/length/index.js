import safe from 'safe'

// length :: [Any] -> Number
export default func => safe(l => l.length)
