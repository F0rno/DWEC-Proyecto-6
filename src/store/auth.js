import { reactive } from 'vue';

// TODO: Set this to false for production

export const auth = reactive({
    id:"",
    user: "",
    token: "",
    loggedin: false,
    login() {
        this.loggedin = true;
    },
    logout() {
        this.loggedin = false;
    }
})