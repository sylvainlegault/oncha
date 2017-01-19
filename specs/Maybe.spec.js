import assert from 'assert'
import Maybe from '../src/Maybe'

describe('A Maybe', () => {
  it('should inspect will return a formatted maybe', () => {
    assert.equal(Maybe('Simon').inspect(), 'Maybe(Simon)')
  })

  it('should else is ignored', () => {
    Maybe('Simon')
      .map(x => x.toUpperCase())
      .else(() => 'null value')
      .fold(x => assert.equal(x, 'SIMON'))
  })

  it('should else is executed', () => {
    Maybe()
      .map(x => x.toUpperCase())
      .else(() => 'null value')
      .map(x => x.toUpperCase())
      .fold(x => assert.equal(x, 'NULL VALUE'))
  })
})