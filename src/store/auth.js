import { reactive } from 'vue';

// TODO: Set this to false for production

export const auth = reactive({
    user: "",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwNzQ3NzMyOCwiZXhwIjoxNzA3NDgwOTI4LCJuYmYiOjE3MDc0NzczMjgsImp0aSI6IlkxUVJJTzFXM1BRODBjU2kiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.JvOB_YWHIt4C15UTE-NADMuWohDFIbPay-VJjfi_01g",
    loggedin: true,
    login() {
        this.loggedin = true;
    },
    logout() {
        this.loggedin = false;
    }
})