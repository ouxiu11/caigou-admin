import { createRouter, createWebHistory } from 'vue-router'
import login from "../view/Login.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: login
    },
    // {
    //     path: '/layout',
    //     name: 'layout',
    //     component:() => import ('../Layout.vue'),
    //     children:[
    //         {
    //             path:'/desktop',
    //             name:'desktop',
    //             component:() => import ('@/desktop.vue')
    //         },
    //     ]
    // }
    // 其他路由...
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router