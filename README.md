# Node.js utils

Some utilities for Node.js

## Installation

`npm install https://github.com/SylvainTirreau/nodeJSUtils `



## Usage

### Walk
Simple version of the Python [walk function](https://docs.python.org/3/library/os.html) to get all directories and files in a folder.

As the Python walk function, for each directory in the three rooted at directory, it yield an array *[dirpath, dirnames, filenames]*.

```typescript
import { os } from 'nodejsutils'
import {join} from 'path'

const readSrc = async (): Promise<void> => {
  for await (const [root, dirs, files] of os.walk('./src')) {
    for (const name of files) {
      console.log(join(root, name))
    }
    for (const name of dirs){
      console.log(join(root, name))
    }
  }
}

void readSrc()
```

