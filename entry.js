import { createApp } from 'vue'
import App from './HelloWorld.vue'

// ?? throws error because postcss does not have support of es6 modules
// import {parse} from '@vue/compiler-sfc'
// console.log(parse(App))

createApp(App).mount('#app')

