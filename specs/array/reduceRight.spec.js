import assert from 'assert'
import Id from '../../package/id'
import reduceRight from '../../package/array/reduceRight'

describe('A reduce', () =>
  it('shoud reduce arrays to a single value', () =>
    Id([1, 2, 3])
      .map(reduceRight((acc, x) => acc + x)(0))
      .map(a => a === 6)
      .map(assert)))
