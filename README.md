# vue-travel-demo

> 本项目是采用vue实现的去哪网移动端仿制页面

### 项目二维码

### 项目技术架构
***
*  vue-cli
*  vue
*  axios
*  vue-router
*  vuex
*  stylus
*  webpack

### 引用的第三方库
***
*  fastclick
*  vue-awesome-swiper
*  better-scroll
*  babel-polyfill

### 项目功能
***
*  首页图片自动循环轮播，图标区域滑动
*  城市搜索功能
*  城市右侧字母表滑动,点击与城市列表联动功能
*  详情显示页面头部滑动显示

###目录结构
***
<pre>
├── build                // 构建服务和webpack配置
├── config               // 项目配置文件
├── src                  // 生产目录
│   ├── assets           // 图片和初始化资源
│   ├── common           // 项目公用组件
│   ├── pages            // 项目组件
│   │     ├──city        // 城市选择页面
│   │     ├──detail      // 详细信息页面
│   │     ├──home        // 主页
│   ├── router           // 路由配置文件 
│   ├── store            // vuex状态管理文件
│   ├── App.vue          // 项目根组件
│   └── main.js          // 项目主配置文件
├── static               // 静态资源文件
│      ├──mock           //本地模拟json数据
├── .babelrc             // 语法解析器
├── .editorconfig        // 编辑器配置文件
├── .eslintgnore         // eslint配置文件(不接受语法检测的区域)
├── .eslintrc.js         // eslint语法检测文件
├── .gitignore           // git配置文件
├── .postcssrc.js        // postcss配置项
├── index.html           // 项目入口文件
├── package-lock.json    // 项目依赖包详细说明文件
├── package.json         // 项目依赖包配置文件
├── README.md            // 项目说明文件
</pre>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
