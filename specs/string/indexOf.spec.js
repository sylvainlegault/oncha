import assert from 'assert'
import Id from '../../package/id'
import indexOf from '../../package/string/indexOf'

describe('A indexOf', () => {
  it('shoud be 4', () =>
    Id('hello world')
      .map(indexOf('o w'))
      .map(a => a === 4)
      .map(assert))

  it('shoud be -1', () =>
    Id('hello world')
      .map(indexOf('po'))
      .map(a => a === -1)
      .map(assert))
})
