import assert from 'assert'
import Id from '../../package/id'
import assign from '../../package/object/assign'

describe('A assign', () =>
  it('shoud combine objects', () =>
    Id([{ b: 1 }, { a: 1 }])
      .map(a => a.reduce(assign))
      .map(a => a.a === 1 && a.b === 1)
      .map(assert)))
