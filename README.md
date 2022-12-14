# face-ai
基于 `TensorFlowJS` 实现的 `face-api.js` 人脸识别库。
安装依赖库,模型文件放在 `public\models` 目录下，npm 主要安装以下：

```shell
npm i --save face-api.js
npm i --save webrtc-adapter
```

- [face-api 使用文档](https://justadudewhohacks.github.io/face-api.js/docs/globals.html)
- [GitHub 作者识别库源码](https://github.com/justadudewhohacks/face-api.js)
- [GitHub 作者在线示例](https://justadudewhohacks.github.io/face-api.js)

## 项目说明

示例参考 `face-api.js` 作者提供示例源码 `examples-browser`。

内含功能：

1. 脸标志检测
2. 人脸表情识别
3. 年龄和性别识别
4. 人脸提取
5. 人脸识别
6. 人脸识别多图处理
7. BBT 图片相似度
8. BBT 图片相似度多查找
9. BBT 人脸识别
10. Video 人脸跟踪
11. Video 人脸识别
12. WebRTC 人脸跟踪
13. WebRTC 人脸识别
14. WebRTC 媒体流基础

## 项目结构

```text
face-api-demo-vue
┌─public                  应用引用静态资源的目录
├─src
│ ├─components            复用组件目录
│ ├─router                页面路由配置文件目录
│ ├─utils                 常用函数工具文件目录
│ ├─views                 页面视图文件目录
│ ├─App.vue               配置App全局应用页面
│ └─main.js               Vue初始化入口文件
├─babel.config.js         Babel格式规范化配置
├─package-lock.json       依赖版本校验信息
├─package.json            项目依赖包、编译配置
└─README.md               项目说明
```

## 其他

**使用前引入模型**

```
console.log(faceapi.nets);
// ageGenderNet
// faceExpressionNet
// faceLandmark68Net
// faceLandmark68TinyNet
// faceRecognitionNet
// ssdMobilenetv1
// tinyFaceDetector
// tinyYolov2
// 放在public/models内
// 通过url地址访问
// await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
// 本地路径
// await faceapi.nets.ssdMobilenetv1.loadFromDisk("../../public/models");
```

**侦测人脸**

- detectAllFaces ：检测图像中的所有脸部
- detectSingleFace ：检测图像中具有最高置信度得分的脸部

默认情况下，`detectAllFaces` 和 `detectSingleFace` 使用 `SSD Mobilenet V1` 人脸检测器。

您可以通过传递相应的 options 对象来指定面部检测器：

```
const detections1 = await faceapi.detectAllFaces(输入, 使用的模型参数)
const detections2 = await faceapi.detectSingleFace(输入, 使用的模型参数)
```

输入 ：使用 `HTMLImageElement | HTMLVideoElement | HTMLCanvasElement` 类型

使用的模型参数 ：配置识别度和修改人脸框，请看 `识别库说明` 或者 `查阅文档`。

**识别库工具**

```
// 请求json格式文件数据
const json = await faceapi.fetchJson("http://www.example.com/file/example.json");

// 从Blob/File对象创建HTMLImageElement
const imgEl = await faceapi.bufferToImage(imgFile);

// 从图像或视频元素创建画布元素
const canvas = faceapi.createCanvasFromMedia(HTMLImageElement | HTMLVideoElement)
```

---

## Project setup / 项目依赖安装初始化

```
npm install
```

### Compiles and hot-reloads for development / 项目编译热更新用于开发调试

```
npm run serve
```

### Compiles and minifies for production / 项目编译打包用于部署

```
npm run build
```