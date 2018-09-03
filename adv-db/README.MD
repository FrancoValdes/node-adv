#node-adv-db

##usage

## Usage

``` js
const setupDatabase = require('node-adv')

setupDabase(config).then(db => {
  const { Agent, Metric } = db

}).catch(err => console.error(err))
```
