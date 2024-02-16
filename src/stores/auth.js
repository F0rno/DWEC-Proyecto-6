import { reactive } from 'vue'
import router from '../router'

export const auth = reactive({
    id:"",
    user: "",
    token: "",
    loggedin: false,
    login() {
        setTimeout(() => {
            this.logout()
        }, 1000*3600) // 1 hour of session
        this.loggedin = true
    },
    logout() {
        this.loggedin = false
        this.id = ""
        this.user = ""
        this.token = ""
        router.push('/login')
    }
})