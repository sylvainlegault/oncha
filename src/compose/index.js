// compose :: ... -> (Any -> Any)
export default (...args) => a => args.reduceRight((acc, func) => func(acc), a)
