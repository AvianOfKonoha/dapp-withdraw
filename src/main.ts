import './assets/css/main.scss';
import './assets/css/wallet.scss';
import 'vue3-toastify/dist/index.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#wallet');
