import assert from 'assert'
import FrozenArray from '../package/frozenArray'

const frozenArray = FrozenArray([1, 2, 3])
const head = frozenArray.head()
const tail = frozenArray.tail()

describe('A FrozenArray', () => {
  it('should have a lenght of 1 ', () =>
    assert.equal(head.length(), 1))

  it('should not be an array', () =>
    assert.equal(Array.isArray(tail), false))

  it('should tail to legnth of 2 ', () =>
    assert.equal(tail.length(), 2))

  it('fold head should return the falue of the first index', () =>
    assert.equal(tail.foldh(), 2))

  it('should nth', () =>
    assert.equal(tail.nth(1), 3))

  it('should have a length of 3', () =>
    assert.equal(frozenArray.length(), 3))

  it('should foldh === 1', () =>
    assert.equal(head.foldh(x => x), 1))

  it('should foldh === 2', () =>
    assert.equal(frozenArray.foldh(x => x * 2), 2))

  it('should be [1,2,3] when inspecting', () =>
    assert.equal(frozenArray.inspect(), 'FrozenArray([1,2,3])'))

  it('should be true when every is called', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).every(x => x < 4), true))

  it('should return an array of one when filtered', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).filter(x => x < 2).length(), 1))

  it('should include 2', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).includes(2), true))

  it('should return 1 as an indexOf 2', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).indexOf(2), 1))

  it('should  ', () =>
    assert.equal(FrozenArray.of([1, 2, 3, 3, 3, 3]).lastIndexOf(3), 5))

  it('should should not be modified when using of ', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).inspect(), 'FrozenArray([1,2,3])'))

  it('should return 1,2,3 on an parmeterless join', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).join(), '1,2,3'))

  it('should double values calling map', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).map(x => x * 2).inspect(), 'FrozenArray([2,4,6])'))

  it('should be true caling some (x === 3)', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).some(x => x === 3), true))

  it('should slice first index of array', () =>
    assert.equal(FrozenArray.of([1, 2, 3]).slice(0)(1).inspect(), 'FrozenArray([1])'))

  it('should have a lenght of 4', () =>
    assert.equal(frozenArray.concat([5]).length(), 4))
})
