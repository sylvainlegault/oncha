// safe :: ƒ -> (Any -> Any)
export default func => x => x && func(x)
