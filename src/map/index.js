import safe from 'safe'

// map :: ƒ -> ([Any] -> [Any])
export default func => safe(l => l.map(func))
