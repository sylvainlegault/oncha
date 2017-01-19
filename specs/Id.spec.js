import assert from 'assert'
import Id from '../src/Id'

describe('A Id', () => {
  it('will map to uppercase', () => {
    Id('Simon')
      .map(x => x.toUpperCase())
      .fold(x => assert.equal(x, 'SIMON'))
  })

  it('of will return a new Id', () => {
    assert.equal(Id.of('Simon').inspect(), Id('Simon').inspect())
  })

  it('inspect will format a correct Id', () => {
    assert.equal(Id('Simon').inspect(), 'Id(Simon)')
  })
})