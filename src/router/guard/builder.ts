import type { Router } from 'vue-router'

/**
 * TODO: 路由跳转进度条
 * @param {Router} router
 */
// function createProgressGuard(router: Router) {}

/**
 * TODO: 路由切换时，销毁当前未完成的http请求，
 * @param router
 */
// function createHttpGuard(router: Router) {
//   const { removeAllHttpPending } = projectSetting;
//   let axiosCanceler: Nullable<AxiosCanceler>;
//   if (removeAllHttpPending) {
//     axiosCanceler = new AxiosCanceler();
//   }
//   router.beforeEach(async () => {
//     // Switching the route will delete the previous request
//     axiosCanceler?.removeAllPending();
//     return true;
//   });
// }

/**
 * TODO: 路由切换，销毁当前消息提示框
 * @param router
 */
// export function createMessageGuard(router: Router) {
//   const { closeMessageOnSwitch } = projectSetting;

//   router.beforeEach(async () => {
//     try {
//       if (closeMessageOnSwitch) {
//         Modal.destroyAll();
//         notification.destroy();
//       }
//     } catch (error) {
//       warn('message guard error:' + error);
//     }
//     return true;
//   });
// }

export function RouterGuardBuilder(router: Router) {}
