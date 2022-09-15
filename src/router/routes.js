import HomeView from "../views/HomeView.vue";

export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/face_landmark_detection",
    name: "脸标志检测",
    component: () => import("@/views/FaceLandmarkDetection.vue"),
  },
  {
    path: "/face_expression_recognition",
    name: "人脸表情识别",
    component: () => import("@/views/FaceExpressionRecognition.vue"),
  },
  {
    path: "/age_gender_recognition",
    name: "年龄和性别识别",
    component: () => import("@/views/AgeAndGenderRecognition.vue"),
  },
  {
    path: "/face_extraction",
    name: "人脸提取",
    component: () => import("@/views/FaceExtraction.vue"),
  },
  {
    path: "/face_recognition",
    name: "人脸识别",
    component: () => import("@/views/FaceRecognition.vue"),
  },
  {
    path: "/face_recognition_more",
    name: "人脸识别多图处理",
    component: () => import("@/views/FaceRecognitionMore.vue"),
  },
  {
    path: "*",
    name: "anyException",
    meta: {
      icon: "none",
      title: "任意异常",
    },
    component: HomeView,
  },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
];
