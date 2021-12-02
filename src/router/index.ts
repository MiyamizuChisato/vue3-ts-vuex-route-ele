import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/',
        name: "home",
        component: () => import ('/src/view/Home.vue')
    }
]

export const route = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes
    }
)

