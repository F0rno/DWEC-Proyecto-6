import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "LayoutRoot",
        component: () => import("../layout/LayoutRoot.vue"),
        children: [
            {
                path: "",
                name: "Intro",
                component: () => import("../views/Intro.vue"),
            },
            {
                path: "",
                name: "Authentification",
                component: () => import("../layout/LayoutAuthentification.vue"),
                children: [
                    {
                        path: "/login",
                        name: "Login",
                        component: () => import("../views/Login.vue"),
                    },
                    {
                        path: "/singup",
                        name: "SingUp",
                        component: () => import("../views/SingUp.vue"),
                    }
                ]
            },
            {
                path: "/home",
                name: "LayoutPrivate",
                component: () => import("../layout/LayoutPrivate.vue"),
                children: [
                    {
                        path: "",
                        name: "Home",
                        component: () => import("../views/Home.vue"),
                    },
                    {
                        path: "info/:id",
                        name: "Info",
                        component: () => import("../views/Info.vue"),
                    },
                    {
                        path: "teams",
                        name: "Teams",
                        component: () => import("../views/Teams.vue"),
                    },
                    {
                        path: "profile",
                        name: "Profile",
                        component: () => import("../views/Profile.vue"),
                    },
                    {
                        path: "contact",
                        name: "Contact",
                        component: () => import("../views/Contact.vue"),
                    },
                    {
                        path: "logout",
                        name: "Logout",
                        component: () => import("../views/Logout.vue")
                    }
                ]
            },
        ]
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router