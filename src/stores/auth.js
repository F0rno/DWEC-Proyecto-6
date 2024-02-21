import { reactive } from 'vue'
import router from '../router'

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
        router.push('/home')
    },
    logout() {
        this.loggedin = false
        this.id = ""
        this.user = ""
        this.token = ""
        clearTimeout(this.timeoutID)
        router.push('/login')
    }
})