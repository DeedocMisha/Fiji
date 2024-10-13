import { createRouter,createWebHashHistory } from "vue-router";
import Biogr from "./components/Biograp_hy.vue"
import Main from "./components/Pho_tos.vue"

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {path: '/',name:'Main' ,component:Main},
        {path: '/Biography',name:'Biography' ,component:Biogr},
    ]
})