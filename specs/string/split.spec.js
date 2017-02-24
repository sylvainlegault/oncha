import assert from 'assert'
import compose from '../../package/compose'
import split from '../../package/string/split'

describe('A split', () => {
  it('shoud be hello world', () =>
    compose(assert, a => a[0] === 'hello', split(' '))('hello world'))

  it('shoud be empty', () =>
    compose(assert, Array.isArray, split('d'))('   '))

  it('shoud be empty', () =>
    compose(assert, Array.isArray, split('d'))())
})
