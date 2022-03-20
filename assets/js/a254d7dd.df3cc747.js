"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[9481],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return u}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?t.createElement(k,s(s({ref:n},c),{},{components:a})):t.createElement(k,s({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1384:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return c},toc:function(){return m},default:function(){return u}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:1},p="\u57fa\u672c\u914d\u7f6e",l={unversionedId:"interview-framework/webpack/basic",id:"interview-framework/webpack/basic",title:"\u57fa\u672c\u914d\u7f6e",description:"\u62c6\u5206\u914d\u7f6e merge",source:"@site/docs/interview-framework/webpack/basic.md",sourceDirName:"interview-framework/webpack",slug:"/interview-framework/webpack/basic",permalink:"/docusaurus/docs/interview-framework/webpack/basic",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u771f\u9898\u6a21\u62df",permalink:"/docusaurus/docs/interview-basic/real-mock"},next:{title:"\u9ad8\u7ea7\u914d\u7f6e",permalink:"/docusaurus/docs/interview-framework/webpack/advanced"}},c={},m=[{value:"\u62c6\u5206\u914d\u7f6e merge",id:"\u62c6\u5206\u914d\u7f6e-merge",level:2},{value:"\u542f\u52a8\u672c\u5730\u670d\u52a1",id:"\u542f\u52a8\u672c\u5730\u670d\u52a1",level:2},{value:"\u89e3\u6790ES6",id:"\u89e3\u6790es6",level:2},{value:"\u89e3\u6790\u6837\u5f0f",id:"\u89e3\u6790\u6837\u5f0f",level:2},{value:"\u89e3\u6790\u56fe\u7247",id:"base64",level:2},{value:"webpack5 \u914d\u7f6e",id:"webpack5-\u914d\u7f6e",level:2}],d={toc:m};function u(e){var n=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6587\u4ef6\u7ed3\u6784")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\u251c\u2500\u2500 build-base-config\n\u2502   \u251c\u2500\u2500 paths.js\n\u2502   \u251c\u2500\u2500 webpack.common.js\n\u2502   \u251c\u2500\u2500 webpack.dev.js\n\u2502   \u2514\u2500\u2500 webpack.prod.js\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 .babelrc\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 postcss.config.js\n")))),(0,i.kt)("h2",{id:"\u62c6\u5206\u914d\u7f6e-merge"},"\u62c6\u5206\u914d\u7f6e merge"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"webpack4 \u914d\u7f6e\u6587\u4ef6\u5939")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u811a\u672c\u4e0e\u4f9d\u8d56")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "scripts": {\n    "devBuild": "webpack --config build-base-config/webpack.dev.js",\n    "dev": "webpack-dev-server --config build-base-config/webpack.dev.js",\n    "build": "webpack --config build-base-config/webpack.prod.js"\n  },\n  "devDependencies": {\n    "clean-webpack-plugin": "^3.0.0",\n    "html-webpack-plugin": "^3.2.0",\n    "webpack": "^4.41.2",\n    "webpack-cli": "^3.3.10",\n    "webpack-dev-server": "^3.9.0",\n    "webpack-merge": "^4.2.2"\n  }\n}\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8def\u5f84\u5de5\u5177")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='paths.js'",title:"'paths.js'"},"const path = require('path')\nconst srcPath = path.join(__dirname, '..', 'src')\nconst distPath = path.join(__dirname, '..', 'dist')\nmodule.exports = { srcPath, distPath }\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"webpack \u73af\u5883\u516c\u5171\u914d\u7f6e \u9aa8\u67b6")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.common.js'",title:"'webpack.common.js'"},"const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nconst { srcPath, distPath } = require('./paths')\n\nmodule.exports = {\n    // \u5165\u53e3 js\u6587\u4ef6\n    entry: path.join(srcPath, 'index'),\n    module: {\n        rules: [\n            // {\n            //     test: /\\.css$/,\n            //     // loader \u7684\u6267\u884c\u987a\u5e8f\u662f\uff1a\u4ece\u540e\u5f80\u524d\uff08\u77e5\u8bc6\u70b9\uff09\n            //     loader: ['style-loader', 'css-loader']\n            // },\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: path.join(srcPath, 'index.html'),\n            filename: 'index.html'\n        })\n    ]\n}\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"webpack \u5f00\u53d1\u73af\u5883\u914d\u7f6e \u9aa8\u67b6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"webpack-merge \u5de5\u5177")))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.dev.js'",title:"'webpack.dev.js'"},"const path = require('path')\nconst webpack = require('webpack')\nconst webpackCommonConf = require('./webpack.common.js')\nconst { smart } = require('webpack-merge')\nconst { srcPath, distPath } = require('./paths')\n\nmodule.exports = smart(webpackCommonConf, {\n    // \u5f00\u53d1 \u6a21\u5f0f\n    mode: 'development',\n    module: {\n        rules: []\n    },\n    plugins: [\n        new webpack.DefinePlugin({\n            // window.ENV = 'development'\n            ENV: JSON.stringify('development')\n        })\n    ],\n})\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"webpakc \u751f\u4ea7\u73af\u5883\u914d\u7f6e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.prod.js'",title:"'webpack.prod.js'"},"const path = require('path')\nconst webpack = require('webpack')\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin')\nconst webpackCommonConf = require('./webpack.common.js')\nconst { smart } = require('webpack-merge')\nconst { srcPath, distPath } = require('./paths')\n\nmodule.exports = smart(webpackCommonConf, {\n    // \u751f\u4ea7 \u6a21\u5f0f\n    mode: 'production',\n    output: {\n        filename: 'bundle.[contentHash:8].js',  // \u6253\u5305\u4ee3\u7801\u65f6\uff0c\u52a0\u4e0a hash \u6233 \u7528\u4e8e\u534f\u5546\u7f13\u5b58\n        path: distPath,\n        // publicPath: 'http://cdn.abc.com'  // \u4fee\u6539\u6240\u6709\u9759\u6001\u6587\u4ef6 url \u7684\u524d\u7f00\uff08\u5982 cdn \u57df\u540d\uff09\uff0c\u8fd9\u91cc\u6682\u65f6\u7528\u4e0d\u5230\n    },\n    module: {\n        rules: []\n    },\n    plugins: [\n        new CleanWebpackPlugin(), // \u4f1a\u9ed8\u8ba4\u6e05\u7a7a output.path \u5373\u914d\u7f6e\u7684\u6253\u5305\u6587\u4ef6\u5939\n        new webpack.DefinePlugin({\n            // window.ENV = 'production'\n            ENV: JSON.stringify('production')\n        })\n    ]\n})\n")))),(0,i.kt)("h2",{id:"\u542f\u52a8\u672c\u5730\u670d\u52a1"},"\u542f\u52a8\u672c\u5730\u670d\u52a1"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5f00\u53d1\u73af\u5883\u914d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054 \u811a\u672c\u548c\u4f9d\u8d56")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "scripts": {\n    "dev": "webpack-dev-server --config build-base-config/webpack.dev.js"\n  },\n  "devDependencies": {\n    "webpack-dev-server": "^3.9.0"\n  }\n}\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539 \u5f00\u53d1\u914d\u7f6e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.dev.js'",title:"'webpack.dev.js'"},"module.exports = smart(webpackCommonConf, {\n    // \u914d\u7f6e webpack-dev-server\n    devServer: {\n        port: 8080,\n        progress: true,  // \u663e\u793a\u6253\u5305\u7684\u8fdb\u5ea6\u6761\n        contentBase: distPath,  // \u6839\u76ee\u5f55\n        open: true,  // \u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\n        compress: true,  // \u542f\u52a8 gzip \u538b\u7f29\n\n        // \u8bbe\u7f6e\u4ee3\u7406\n        proxy: {\n            // \u5c06\u672c\u5730 /api/xxx \u4ee3\u7406\u5230 localhost:3000/api/xxx\n            '/api': 'http://localhost:3000',\n\n            // \u5c06\u672c\u5730 /api2/xxx \u4ee3\u7406\u5230 localhost:3000/xxx\n            '/api2': {\n                target: 'http://localhost:3000',\n                pathRewrite: {\n                    '/api2': ''\n                }\n            }\n        }\n    }\n})\n")))),(0,i.kt)("h2",{id:"\u89e3\u6790es6"},"\u89e3\u6790ES6"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u516c\u5171\u73af\u5883\u914d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054 \u4f9d\u8d56")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "devDependencies": {\n    "@babel/core": "^7.7.4",\n    "@babel/preset-env": "^7.7.4",\n    "babel-loader": "^8.0.6"\n  }\n}\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539 \u516c\u5171\u914d\u7f6e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.common.js'",title:"'webpack.common.js'"},"module.exports = {\n    module: {\n        rules: [\n            // \u89e3\u6790es6\u8bed\u6cd5\n            {\n                test: /\\.js$/, // \u5339\u914djs\u6587\u4ef6\n                loader: ['babel-loader'], // \u52a0\u8f7d\u9879\n                include: srcPath, // \u5305\u542b\u8def\u5f84\n                exclude: /node_modules/ // \u6392\u9664\u8def\u5f84\n            },\n        ]\n    },\n}\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u65b0\u589e babel \u914d\u7f6e\u6587\u4ef6")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='.babelrc'",title:"'.babelrc'"},'{\n    "presets": ["@babel/preset-env"],\n    "plugins": []\n}\n')))),(0,i.kt)("h2",{id:"\u89e3\u6790\u6837\u5f0f"},"\u89e3\u6790\u6837\u5f0f"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u516c\u5171\u73af\u5883\u914d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054 \u4f9d\u8d56")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "devDependencies": {\n    "style-loader": "^1.0.1",\n    "css-loader": "^3.2.1",\n    "autoprefixer": "^9.7.3",\n    "postcss-loader": "^3.0.0",\n    "less": "^3.10.3",\n    "less-loader": "^5.0.0",\n  }\n}\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539 \u516c\u5171\u914d\u7f6e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.common.js'",title:"'webpack.common.js'"},"module.exports = {\n    module: {\n        rules: [\n            // \u89e3\u6790css\u6587\u4ef6 \u4e14\u5904\u7406\u6d4f\u89c8\u5668\u6837\u5f0f\u517c\u5bb9\u6027\n            {\n                test: /\\.css$/,\n                // loader \u7684\u6267\u884c\u987a\u5e8f\u662f\uff1a\u4ece\u540e\u5f80\u524d\n                loader: ['style-loader', 'css-loader', 'postcss-loader']\n            },\n            // \u89e3\u6790less\u6587\u4ef6\n            {\n                test: /\\.less$/,\n                // \u589e\u52a0 'less-loader' \uff0c\u6ce8\u610f\u987a\u5e8f\n                loader: ['style-loader', 'css-loader', 'less-loader']\n            }\n        ]\n    },\n}\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u65b0\u589e postcss.config.js \u914d\u7f6e\u6587\u4ef6")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='postcss.config.js'",title:"'postcss.config.js'"},"module.exports = {\n    plugins: [require('autoprefixer')]\n}\n")))),(0,i.kt)("h2",{id:"base64"},"\u89e3\u6790\u56fe\u7247"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5f00\u53d1\u73af\u5883\u914d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054 \u4f9d\u8d56")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "devDependencies": {\n    "file-loader": "^5.0.2"\n  }\n}\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539 \u5f00\u53d1\u914d\u7f6e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.dev.js'",title:"'webpack.dev.js'"},"module.exports = {\n    module: {\n        rules: [\n            // \u56fe\u7247\u4e0d\u505a\u4efb\u4f55\u5904\u7406 \u76f4\u63a5\u5f15\u5165 url \n            {\n                test: /\\.(png|jpg|jpeg|gif)$/,\n                use: 'file-loader'\n            }\n        ]\n    },\n}\n")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u751f\u4ea7\u73af\u5883\u914d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054 \u4f9d\u8d56")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "devDependencies": {\n    "url-loader": "^3.0.0",\n    "file-loader": "^5.0.2"\n  }\n}\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539 \u751f\u4ea7\u914d\u7f6e")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='webpack.prod.js'",title:"'webpack.prod.js'"},"module.exports = {\n    module: {\n        rules: [\n            // \u4f18\u5316 \u56fe\u7247\u8d44\u6e90\n            {\n                test: /\\.(png|jpg|jpeg|gif)$/,\n                use: {\n                    loader: 'url-loader',\n                    options: {\n                        // \u5c0f\u4e8e 5kb \u7684\u56fe\u7247\u7528 base64 \u683c\u5f0f\u4ea7\u51fa\n                        // \u5426\u5219\uff0c\u4f9d\u7136\u5ef6\u7528 file-loader \u7684\u5f62\u5f0f\uff0c\u4ea7\u51fa url \u683c\u5f0f\n                        limit: 5 * 1024,\n\n                        // \u6253\u5305\u5230 img \u76ee\u5f55\u4e0b\n                        outputPath: '/img1/',\n\n                        // \u8bbe\u7f6e\u56fe\u7247\u7684 cdn \u5730\u5740\uff08\u4e5f\u53ef\u4ee5\u7edf\u4e00\u5728\u5916\u9762\u7684 output \u4e2d\u8bbe\u7f6e\uff0c\u90a3\u5c06\u4f5c\u7528\u4e8e\u6240\u6709\u9759\u6001\u8d44\u6e90\uff09\n                        // publicPath: 'http://cdn.abc.com'\n                    }\n                }\n            },\n        ]\n    },\n}\n")))),(0,i.kt)("h2",{id:"webpack5-\u914d\u7f6e"},"webpack5 \u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5347\u7ea7 webpack5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"package.json dev-server \u547d\u4ee4\u6539\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},'"dev": "webpack serve",')),(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u8c03\u6574 ",(0,i.kt)("inlineCode",{parentName:"li"},"const { merge } = require('webpack-merge')")),(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u8c03\u6574 ",(0,i.kt)("inlineCode",{parentName:"li"},"const { CleanWebpackPlugin } = require('clean-webpack-plugin')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"module.rules")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"loader: ['xxx-loader']")," \u6362\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"use: ['xxx-loader']")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename: 'bundle.[contenthash:8].js'")," \u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"h")," \u5c0f\u5199\uff0c\u4e0d\u80fd\u5927\u5199")))))}u.isMDXComponent=!0}}]);