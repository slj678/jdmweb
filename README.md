# 苏州街德猫机械设备有限公司 - 前端说明

放置在 `web/` 下的静态前端示例，包括首页轮播和可复用的切换按钮。

- 轮播占位图片位置：`web/images/`
- 请添加三张图片，文件名分别为：`slide1.jpg`、`slide2.jpg`、`slide3.jpg`（支持 jpg/png 等格式）。

主要文件：
- [web/index.html](web/index.html) - 首页，包含轮播占位和引导文案。
- [web/styles.css](web/styles.css) - 全局样式与轮播样式。
- [web/js/controls.js](web/js/controls.js) - 可复用的切换按钮，所有页面可引入并复用。
- [web/js/main.js](web/js/main.js) - 首页轮播逻辑，监听 `carousel-prev` / `carousel-next` 事件。

在其他页面复用切换按钮：
1. 在页面中引入 `js/controls.js`（ES 模块），找到轮播容器元素。
2. 调用 `createCarouselControls(container)`，按钮会在容器内创建并通过事件触发切换：`carousel-prev` / `carousel-next`。

需要我为你把示例图片也添加到 `web/images/` 下并生成占位图吗？
