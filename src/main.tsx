import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'

// 通过ReactDOM模块的API，创建一个root对象：创建对象时需要index.html中id为root的div元素做为参数。
// 调用元素render函数挂载页面元素：将需要挂载的页面元素作为render函数的参数传递给render函数完成渲染。
// React之所以如此风靡，其实是它提供了页面组件的开发能力。个人理解的页面组件：就是把一个完整页面的部分区域抽象成一个独立的tsx文件，这个tsx文件就是一个组件。

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
