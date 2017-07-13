// compose :: ... -> (Any -> Any)
export default (...rest) => (...a) =>
  rest
    .slice(0, rest.length - 1)
    .reduceRight((acc, func) => func(acc), rest.slice(rest.length - 1)[0](...a))
