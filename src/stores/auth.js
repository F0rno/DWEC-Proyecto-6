import { reactive } from 'vue'
import router from '../router'
import { getLocalStorage, setLocalStorage, deleteLocalStorage, xorEncrypt, xorDecrypt } from '../utils'

// TODO: encrypt the token in the local storage

export const auth = reactive({
    id:"",
    user: "",
    token: "",
    loggedin: false,
    tokenKey: `${import.meta.env.VITE_TOKEN_KEY}`,
    timeoutID: null,
    login(id, user, token) {
        this.timeoutID = setTimeout(() => {
            this.logout()
        }, 1000*3600) // 1 hour of session
        this.id = id
        this.user = user
        this.token = token
        this.loggedin = true
        const encryptedToken = xorEncrypt(this.token, this.tokenKey)
        setLocalStorage('last_auth', { id, user, encryptedToken })
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
    async checkIfValidToken(token) {
        // fetch the api to check if the token stills valid
        const url = `${import.meta.env.VITE_API_URL}/books`
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.status === 200) {
                return true
            } else {
                return false
            }
        })
        .catch(err => {
            console.error('Error:', err)
            return false
        })
    }
    ,
    checkLoginStatus() {
        const localStorageAuth = getLocalStorage('last_auth')
        if (Object.keys(localStorageAuth).length === 0) {
            return
        }
        const token = xorDecrypt(localStorageAuth.encryptedToken, this.tokenKey)
        this.checkIfValidToken(token)
        .then(isTokenValid => {
            if (!isTokenValid) {
                this.logout()
                return
            }
            this.login(localStorageAuth.id, localStorageAuth.user, token)  
        })
    }
})

auth.checkLoginStatus();