# All Debrid One

all debrid in one place

## references

- [All Debrid Docs](https://docs.alldebrid.com/)

## Features

- make calls to the all debrid API

## Use/examples

```javascript
import { AllDebrid } from './AllDebridOne/src/main';

const alldebrid = new AllDebrid();
(async () => console.log(await alldebrid.pin('Appname')))();
```

```
{
  status: 'success',
  data: {
    pin: 'RRPE',
    check: 'ddb906bc035d9fc5cdf36fe4830be5cd0742379f',
    expires_in: 600,
    user_url: 'https://alldebrid.com/pin/?pin=RRPE',
    base_url: 'https://alldebrid.com/pin/',
    check_url: 'https://api.alldebrid.com/v4/pin/check?check=ddb906bc035d9fc5cdf36fe4830be5cd0742379f&pin=RRPE&agent=Allan'
  }
}
```

## Stack used

**Back-end:** Node.js, Axios, TypeScript, Jest

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
