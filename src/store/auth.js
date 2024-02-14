import { reactive } from 'vue';

// TODO: Set this to false for production

export const auth = reactive({
    id:"",
    user: "pablo",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcwNzk0MjQzOSwiZXhwIjoxNzA3OTQ2MDM5LCJuYmYiOjE3MDc5NDI0MzksImp0aSI6Ikh3VG50czZwaHQwejE4cEUiLCJzdWIiOiI0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.P_Rp7kttMSgw_HQnN4rxgGyZwdIAziF3QgRdCDZmOdM",
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