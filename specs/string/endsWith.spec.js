import assert from 'assert'
import Id from '../../package/id'
import endsWith from '../../package/string/endsWith'

describe('A endsWith', () => {
  it('shoud be true', () => Id('hello').map(endsWith('llo')).map(assert))

  it('shoud be false', () =>
    Id('hello').map(endsWith('he')).map(a => !a).map(assert))
})
