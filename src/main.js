import './assets/main.css'
import NavBar from './components/ui/NavBar.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('NavBar', NavBar);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);

app.mount('#app')
