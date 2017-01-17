# ऊंचा Oncha FrozenArray
A imutable array implementation of with head, tail, fold methods.

## usage
``` bash
yarn add oncha.frozen-array
```

``` JavaScript
import Fa from 'oncha.frozen-array'

Fa([2, 4, 6])
  .map(num => num * 2)
  .filter(num => num > 5)
  .fold(console.log)
//=> [8, 12]
```