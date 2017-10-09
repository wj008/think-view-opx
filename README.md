# think-view-opx
use sdopx to render view files for ThinkJS 3.x

更多帮助：http://www.sdopx.com/
**install**
```
npm install think-view-opx
```
**How To Use**
```javascript
//  ./src/config/adapter.js

const opx=require('think-view-opx'); 

exports.view = {
  type: 'opx',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  opx: {
    handle: opx
  }
};

```
yyyy-MM-dd HH:mm:ss
