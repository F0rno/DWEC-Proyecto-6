import { reactive } from 'vue';

// TODO: Set this to false for production
// Set thi folder to stores no store

export const auth = reactive({
    id:"",
    user: "pablo",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwNzk4NDc4MSwiZXhwIjoxNzA3OTg4MzgxLCJuYmYiOjE3MDc5ODQ3ODEsImp0aSI6ImN4alZCUldTakNablBiNVAiLCJzdWIiOiI0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.NXEwMwh5WgHKhzmCalFupPw0pAPYN-sYu3WlEFTtGSE",
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