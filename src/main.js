import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Button } from 'vant';
import axios from 'axios'
import { Tab, Tabs } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader);
Vue.use(Tab);
Vue.use(Tabs);
Vue.prototype.$axios = axios

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')