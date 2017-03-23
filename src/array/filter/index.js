import safe from 'safe'

// filter :: ƒ -> [Any] -> [Any]
export default func => safe(l => l.filter(func))
