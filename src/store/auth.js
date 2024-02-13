import { reactive } from 'vue';

// TODO: Set this to false for production

export const auth = reactive({
    id:"",
    user: "pablo",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwNzc2NzAyMCwiZXhwIjoxNzA3NzcwNjIwLCJuYmYiOjE3MDc3NjcwMjAsImp0aSI6Im84dUVibkd5aG1RZnRYbk4iLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.OB-u41hoajB7DQf0zeU3lyro1h_oQSkS5kcTumtF4Mw",
    loggedin: true,
    login() {
        this.loggedin = true;
    },
    logout() {
        this.loggedin = false;
    }
})