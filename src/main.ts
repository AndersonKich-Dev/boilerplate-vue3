import Icons from '@/libs/fontAwesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({ ...Icons });

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
