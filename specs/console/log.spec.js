import assert from 'assert'
import Id from '../../package/id'
import log from '../../package/console/log'

describe('A log', () => {
  it('should log and return an array of params', () =>
    Id(log(1, 2, 3)).map(b => b.length === 3).map(assert))

  it('should log and return the single parameter', () =>
    Id(log(1)).map(b => b === 1).map(assert))

  it('should log and return an undefined', () =>
    Id(log()).map(b => b === undefined).map(assert))
})
