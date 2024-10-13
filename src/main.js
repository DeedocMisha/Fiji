import './assets/main.css'
import App from './components/App.vue';
import router from './router';
import { createApp } from 'vue';


const app= createApp(App)
app.use(router)
app.mount('#app');