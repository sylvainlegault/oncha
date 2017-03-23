import assert from 'assert'
import Id from '../../package/id'
import filter from '../../package/array/filter'

describe('A filter', () =>
  it('shoud filter arrays', () =>
    Id([0, 1, 2, 3])
      .map(filter(x => x >= 2))
      .map(a => a[0] === 2 && a[1] === 3)
      .map(assert)))
