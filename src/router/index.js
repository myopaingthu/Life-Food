import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home";
import Detail from "../components/Detail";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/detail",
        name: "Detail",
        component: Detail
    }
];

const router = new VueRouter({
    routes, // short for `routes: routes`,
    mode: 'history'
});

export default router;