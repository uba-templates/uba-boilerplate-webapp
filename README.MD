# uba-boilerplate-webapp

## 使用 Neoui + Kero + Knockout + jQuery + Director.js + Require.js 构建的WebApp最佳实践

### 1. 安装


```
# 安装全局 uba
$ npm install uba -g

# 打开 uba 选择该最佳实践
$ uba init

# 手动安装npm依赖包(使用uba操作可以自动化执行此步骤)
$ npm install
```

### 2. 调试
等待`uba`所有操作完毕后，进入到最佳实践根目录下，使用下面命令来启动本工程。

```
# 运行
$ npm start
```

启动完毕后打开`http://localhost:9000/`来进行访问。

** 服务端口可以修改 `package.json` 下的 `"start": "dora -p 9000 --plugins 'proxy?port=8989'"` 来更改，代理服务器端口也从这里修改 **

代理服务端口默认为：`8989`

本工程所使用http调试服务以及代理服务来自支付宝开源 [Dora.js](https://github.com/dora-js).


### 3. 相关配置

- `router/routers.js` 路由配置管理

- `proxy.config.js` 路由代理管理

- `mock` Mock数据模拟

- `config` 最佳实践配置项

- `pages` 具体的页面组件

- `vendor` 第三方资源插件类

- `static` 自定义静态资源类

- `style` CSS类
