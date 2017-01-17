# ऊंचा Oncha Id
Identity monad implmentation

## usage
``` bash
yarn add oncha.id
```

``` JavaScript
import Id from 'oncha.id'

Id(5)
  .map(num => num * 7)
  .map(num => num - 1)
  .fold(console.log)
//=> 34
```