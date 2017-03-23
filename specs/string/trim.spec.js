import assert from 'assert'
import compose from '../../package/compose'
import trim from '../../package/string/trim'

describe('A trim', () => {
  it('should be hello world', () =>
    compose(assert, a => a === 'hello world', trim)('  hello world   '))

  it('should be empty', () => compose(assert, a => a === '', trim)('   '))

  it('should be empty', () => compose(assert, a => a === '', trim)())
})
