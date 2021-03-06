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

更复杂一些的配置

```javascript
//  ./src/config/adapter.js

const opx=require('think-view-opx');
exports.view = {
    type: 'opx',
    common: {
        viewPath: path.join(think.ROOT_PATH, 'view'),
        sep: '_',
        extname: '.html',

        beforeRender: function (opx, option) {
            var Sdopx = opx._Sdopx;
            //判断避免重复执行注册,只能做一次注册（不推荐）--
            if (!Sdopx.loaded) {
                //注册函数 或注册其他函数
                Sdopx.registerFunction('hello', function (name) {
                    return 'hello ' + name;
                });

                Sdopx.loaded = true;
            }
            //加入配置项,每次渲染都要执行 模板用 {#key#} 读取
            opx.assignConfig({
                webname: '测试网站',
                email: 'test@example.com'
            });

        }

    },
    opx: {
        handle: opx
    }
};

```

推荐的做法
```javascript
//  ./src/config/sdopx_common.js

const Sdopx = require('sdopx').Sdopx;
//在下面注册你的修饰器 函数 插件等

Sdopx.registerFunction('hello', function (name) {
    return 'hello ' + name;
});


```

```javascript
//  ./src/config/adapter.js

const opx=require('think-view-opx');
require('./sdopx_common.js');

exports.view = {
    type: 'opx',
    common: {
        viewPath: path.join(think.ROOT_PATH, 'view'),
        sep: '_',
        extname: '.html',
        beforeRender: function (opx, option) {
            //加入配置项,每次渲染都要执行 模板用 {#key#} 读取
            opx.assignConfig({
                webname: '测试网站', // 模板中使用 {#webname#} 读取
                email: 'test@example.com' // {#email#}
            });
        }
    },
    opx: {
        handle: opx
    }
};

```