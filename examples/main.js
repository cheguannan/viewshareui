import Vue from 'vue';
import App from './app.vue';
import viewshareui from '../src/index';
// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/zh-CN';

Vue.use(viewshareui)

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    render: h => h(App)
});
