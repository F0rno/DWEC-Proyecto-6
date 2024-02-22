<script>
import { auth } from '../../../stores/auth'
import { getLocalStorage, setLocalStorage} from '../../../utils'

export default {
    data() {
        return {
            showMenu: false,
            darkMode: this.getDarkModeFromLocalStorage()
        }
    },
    computed: {
        auth() {
            return auth.user;
        },
        getDarkMode() {
            return this.darkMode;
        }
    },
    methods: {
        getDarkModeFromLocalStorage() {
            // Defaul getLocalStorage value is []
            const darkMode = getLocalStorage(`darkMode_${auth.user}`)
            if (darkMode instanceof Array) {
                return false;
            }
            return darkMode;
        },
        setDarkModeToLocalStorage() {
            setLocalStorage(`darkMode_${auth.user}`, this.darkMode);
        },
        toogleMenu() {
            this.showMenu = !this.showMenu;
        },
        setDarkMode() {
            if (this.darkMode) {
                // Set dark mode colors
                document.documentElement.style.setProperty('--dark-green', '#181818');
                document.documentElement.style.setProperty('--darker-green', '#000000');
            } else {
                document.documentElement.style.setProperty('--dark-green', '#4F6F52');
                document.documentElement.style.setProperty('--darker-green', '#3A4D39');
            }
        },
        toogleDarkMode() {
            this.darkMode = !this.darkMode;
            this.setDarkMode()
            this.setDarkModeToLocalStorage()
        }
    },
    created() {
        this.setDarkMode()
    }
}
</script>
<template lang="">
    <header class="private-header">
        <router-link to="/home/">
            <img class="private-header__logo" src="../../../assets/Booky-white.png" alt="Booky logo">
        </router-link>
        <nav class="private-header__navbar">
            <ul class="private-header__navbar__user">
                <a 
                @click="toogleMenu" 
                @keyup.enter="toogleMenu" 
                @keyup.space="toogleMenu" 
                tabindex="0" 
                aria-label="Toggle navigation menu"
                role="button"
                >
                    {{ auth }}
                </a>
            </ul>
            <nav v-if="showMenu">
                <ul class="private-header__navbar__menu">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20zm7-7.77"/></svg>
                        <router-link to="/home">Home</router-link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 256"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"/></svg>
                        <router-link to="/home/profile">Profile</router-link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3c.279 0 .55.033.81.094a5.948 5.948 0 0 0-.301 1.575L6 16v.086a1.493 1.493 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"/></svg>
                        <router-link to="/home/teams">Teams</router-link>
                    </li>
                    <li>
                        <svg 
                        v-if="!darkMode" 
                        @click='toogleDarkMode'
                        xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                            <path d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"/>
                        </svg>
                        <svg 
                        v-if="darkMode"
                        @click='toogleDarkMode'
                        xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                            <g style="stroke: var(--light-green);" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/>
                                <path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/>
                            </g>
                        </svg>
                        <p 
                        @click='toogleDarkMode'
                        tabindex="0"
                        v-if="!darkMode">
                            Dark
                        </p>
                        <p 
                        @click='toogleDarkMode'
                        tabindex="0"
                        v-if="darkMode">
                            Light
                        </p>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M11.75 19h-.25q-3.55 0-6.025-2.475T3 10.5q0-3.55 2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825q1.162 1.163 1.824 2.7T20 10.5q0 3.35-1.888 6.225t-4.762 4.5q-.25.125-.5.138t-.45-.113q-.2-.125-.35-.325t-.175-.475zm2.25-.65q1.775-1.5 2.888-3.512T18 10.5q0-2.725-1.888-4.612T11.5 4Q8.775 4 6.888 5.888T5 10.5q0 2.725 1.888 4.613T11.5 17H14zm-2.525-2.375q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3M9.3 8.375q.275.125.55.013t.45-.363q.225-.3.525-.463T11.5 7.4q.6 0 .975.337t.375.863q0 .325-.187.65t-.663.8q-.625.55-.925 1.038t-.3.987q0 .3.213.513t.512.212q.3 0 .5-.225t.3-.525q.125-.425.45-.775t.6-.625q.525-.525.788-1.05t.262-1.05q0-1.15-.788-1.85T11.5 6q-.8 0-1.475.388t-1.1 1.062q-.15.275-.038.538t.413.387m2.2 2.8"/></svg>
                        <router-link to="/home/contact">Contact</router-link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></svg>
                        <router-link to="/home/logout">Logout</router-link>
                    </li>
                </ul>
            </nav>
        </nav>
    </header>
</template>
<style lang="css" scoped>
    a {
        user-select: none;
    }

    a:hover {
        color: var(--white);
    }

    p:hover {
        color: var(--white);
    }

    .private-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2vh;
        padding-right: 2vh;
        height: 12vh;
        background-color: var(--darker-green);
    }

    .private-header__logo {
        width: 15vh;
    }

    .private-header__navbar {
        position: relative;
        min-width: 20vh;
    }

    .private-header__navbar__user {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light-green);
        font-family: 'Oswald', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        width: 100%;
        text-align: center;

        & svg {
            width: 4vh;
            fill: var(--light-green);
            margin-right: 8px;
            cursor: pointer;
        }

        & a {
            font-size: 2.5vh;
            color: var(--light-green);
            font-family: 'Oswald', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 500;
            cursor: pointer;
        }
    }

    .private-header__navbar__menu {
        position: absolute;
        width: 100%;
        background-color: var(--darker-green);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-radius: 5px;
        z-index: 1;

        & a {
            color: var(--light-green);
            font-family: 'Oswald', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 200;
            cursor: pointer;
        }

        & p {
            color: var(--light-green);
            font-family: 'Oswald', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 200;
            cursor: pointer;
        }
    }
    
    .private-header__navbar__menu li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        font-size: 2.5vh;

        & svg {
            width: 3vh;
            fill: var(--light-green);
            margin-right: 8px;
        }
    }

    @media (768px <= width) {
        .private-header {
            padding-left: 8vh;
            padding-right: 8vh;
        }
        .private-header__logo {
            width: 20vh;
        }
        .private-header__navbar__user {
            text-align: center;
            & a {
                font-size: 3.5vh;
            }
        }
        .private-header__navbar__menu li {
            padding: 1.5vh;
            font-size: 2.25vh;
        }
        .private-header__navbar__menu:last-child {
            padding-bottom: 16px;
        }
    }
    @media (1200px <= width) {
        .private-header {
            padding-left: 10vh;
            padding-right: 10vh;
        }
        .private-header__navbar__menu li {
            padding: 0.5vh;
            font-size: 3vh;
        }
    }
</style>