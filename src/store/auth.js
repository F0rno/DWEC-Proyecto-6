import { reactive } from 'vue';

// TODO: Set this to false for production

export const auth = reactive({
    id:"",
    user: "pablo",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwNzg5OTM1OSwiZXhwIjoxNzA3OTAyOTU5LCJuYmYiOjE3MDc4OTkzNTksImp0aSI6Ik9TM2lyeVVZZjhUeTlCejEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.DiyPBg76QUf8d9rNbD8Pn4MYq9AX1sFMOFG582dEKFg",
    loggedin: true,
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