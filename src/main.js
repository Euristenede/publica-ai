import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css'           //core css
import 'primeicons/primeicons.css'                     //icons
import "primeflex/primeflex.css";                      //primeflex


const app = createApp(App);

app.use(router)
app.use(PrimeVue)
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('Menubar', Menubar)
app.component('Card', Card)
app.mount('#app')