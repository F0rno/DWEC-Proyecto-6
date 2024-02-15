import { reactive } from 'vue';

// Set thi folder to stores no store

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
        this.id = "";
        this.user = "";
        this.token = "";
    }
})