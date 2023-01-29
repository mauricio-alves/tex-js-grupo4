const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `@import "./src/assets/scss/_extends.scss;"`,
//         additionalData: `@import "./src/assets/scss/_footer.scss;"`,
//         additionalData: `@import "./src/assets/scss/_header.scss;"`,
//         additionalData: `@import "./src/assets/scss/_mixins.scss;"`,
//         additionalData: `@import "./src/assets/scss/_variaveis.scss;"`
//       }
//     }
//   }
// }
