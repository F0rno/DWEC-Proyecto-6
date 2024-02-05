import { reactive } from 'vue';

// TODO Set this to false for production

export const auth = reactive({
    user: "",
    loggedin: true,
    login() {
        this.loggedin = true;
    },
    logout() {
        this.loggedin = false;
    }
})