import { reactive } from 'vue'
import router from '../router'

export const auth = reactive({
    id:"",
    user: "Kutulu",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwODUwMzQ0OSwiZXhwIjoxNzA4NTA3MDQ5LCJuYmYiOjE3MDg1MDM0NDksImp0aSI6IkJyVWRrVjV5eFNKNkhxekoiLCJzdWIiOiIzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.LEuopK91R86RE6UbwacrD_CZ5xoitCAuGzMJy9BL_7g",
    loggedin: true,
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