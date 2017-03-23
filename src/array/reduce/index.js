import safe from 'safe'

// reduce :: ƒ -> Any -> [Any] -> Any
export default func => acc => safe(l => l.reduce(func, acc))
