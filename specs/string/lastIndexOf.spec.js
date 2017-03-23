import assert from 'assert'
import Id from '../../package/id'
import lastIndexOf from '../../package/string/lastIndexOf'

describe('A lastIndexOf', () => {
  it('should be 7', () =>
    Id('hello world').map(lastIndexOf('o')).map(a => a === 7).map(assert))

  it('should be -1', () =>
    Id('hello world').map(lastIndexOf('po')).map(a => a === -1).map(assert))
})
