import assert from 'assert'
import compose from '../../package/compose'
import trim from '../../package/string/trim'

describe('A trim', () => {
  it('shoud be hello world', () =>
    compose(assert, a => a === 'hello world', trim)('  hello world   '))

  it('shoud be empty', () => compose(assert, a => a === '', trim)('   '))

  it('shoud be empty', () => compose(assert, a => a === '', trim)())
})
