import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Intro from "../views/Intro.vue"
import Login from "../views/Login.vue"
import SingUp from "../views/SingUp.vue"
import Info from "../views/Info.vue"
import Profile from "../views/Profile.vue"
import LayoutPrivate from "../layout/LayoutPrivate.vue"
import LayoutRoot from "../layout/LayoutRoot.vue"
import LayoutPresentation from "../layout/LayoutPresentation.vue"
import Teams from "../views/Teams.vue"

const routes = [
    {
        path: "/",
        name: "LayoutRoot",
        component: LayoutRoot,
        children: [
            {
                path: "",
                name: "Presentation",
                component: LayoutPresentation,
                children: [
                    {
                        path: "",
                        name: "Intro",
                        component: Intro,
                    },
                    {
                        path: "/login",
                        name: "Login",
                        component: Login,
                    },
                    {
                        path: "/singup",
                        name: "SingUp",
                        component: SingUp,
                    }
                ]
            },
            {
                path: "/home",
                name: "LayoutPrivate",
                component: LayoutPrivate,
                children: [
                    {
                        path: "",
                        name: "Home",
                        component: Home,
                    },
                    {
                        path: "info:id",
                        name: "Info",
                        component: Info,
                    },
                    {
                        path: "teams",
                        name: "Teams",
                        component: Teams,
                    },
                    {
                        path: "profile",
                        name: "Profile",
                        component: Profile,
                    },
                ]
            },
        ]
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router