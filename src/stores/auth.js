import { reactive } from 'vue'
import router from '../router'
import { getLocalStorage, setLocalStorage, deleteLocalStorage } from '../utils'

export const auth = reactive({
    id:"",
    user: "",
    token: "",
    loggedin: false,
    timeoutID: null,
    login(id, user, token) {
        this.timeoutID = setTimeout(() => {
            this.logout()
        }, 1000*3600) // 1 hour of session
        this.id = id
        this.user = user
        this.token = token
        this.loggedin = true
        setLocalStorage('last_auth', { id, user, token })
        router.push('/home')
    },
    logout() {
        this.loggedin = false
        this.id = ""
        this.user = ""
        this.token = ""
        clearTimeout(this.timeoutID)
        deleteLocalStorage('last_auth')
        router.push('/login')
    },
    checkLoginStatus() {
        const localStorageAuth = getLocalStorage('last_auth')
        if (Object.keys(localStorageAuth).length > 0) {
            this.id = localStorageAuth.id
            this.user = localStorageAuth.user
            this.token = localStorageAuth.token
            this.loggedin = true
            router.push('/home')
        }
    }
})

auth.checkLoginStatus()