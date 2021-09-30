import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const RouteView = {
    name: "RouteView",
    render: (h) => h("router-view"),
};

const routes=[
    {
        path:"/router/:action",
        component:RouteView,
        children:[{
            path: "/router",
            name: "Router-index",
            component: () => import("@/views/Router/index.vue"),
        },{
            path: "/router/foo",
            name: "Foo",
            component: () => import("@/views/Router/Foo.vue"),
        }
        ,{
            path: "/router/bar",
            name: "Bar",
            component: () => import("@/views/Router/Bar.vue"),
        }]
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
    //   base: "/frontend",
});

export default router;