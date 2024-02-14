import { reactive } from 'vue';

// TODO: Set this to false for production

export const auth = reactive({
    id:"",
    user: "pablo",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwNzkxMTMwMywiZXhwIjoxNzA3OTE0OTAzLCJuYmYiOjE3MDc5MTEzMDMsImp0aSI6Im9McXJ3NFhwR0Z2bm5jYkgiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.KpGOFfBzQimmj61edVBYCREhFvBRNmJqZIK9THkKIME",
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