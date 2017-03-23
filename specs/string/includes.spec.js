import assert from 'assert'
import Id from '../../package/id'
import includes from '../../package/string/includes'

describe('A includes', () => {
  it('should be true', () =>
    Id('hello world').map(includes(' wo')).map(assert))

  it('should be false', () =>
    Id('hello world').map(includes('not')).map(a => !a).map(assert))
})
