import assert from 'assert'
import compose from '../../package/compose'
import split from '../../package/string/split'

describe('A split', () => {
  it('should be hello world', () =>
    compose(assert, a => a[0] === 'hello', split(' '))('hello world'))

  it('should be empty', () =>
    compose(assert, Array.isArray, split('d'))('   '))

  it('should be empty', () => compose(assert, Array.isArray, split('d'))())
})
