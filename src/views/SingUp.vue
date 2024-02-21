<script>
import { auth } from '../stores/auth';
import { sleep } from '../utils.js';

export default {
    data() {
        return {
            validUsername: undefined,
            validEmail: undefined,
            validPassword: undefined,
            username: '',
            email: '',
            password: '',
            send: false,
            fail: false
        }
    },
    methods: {
        onChange(event) {
            // REGEX for name, email, subject, message
            const regexUsername = /^[a-zA-Z0-9]{3,20}$/
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            const regexPassword = /^[a-zA-Z0-9]{3,20}$/

            // Check if the input is valid
            if (event.target.name === 'email') {
                this.email = event.target.value
                this.validEmail = regexEmail.test(event.target.value)
            } else if (event.target.name === 'password') {
                this.password = event.target.value
                this.validPassword = regexPassword.test(event.target.value)
            } else if (event.target.name === 'username') {
                this.username = event.target.value
                this.validUsername = regexUsername.test(event.target.value)
            }
        },
        validForm() {
            return this.validEmail && this.validPassword && this.validUsername
        },
        showSpinner() {
            this.send = true
        },
        hiddeSpinner() {
            this.send = false
        },
        showErrorMessage() {
            this.fail = true
        },
        hiddeErrorMessage() {
            this.fail = false
        },
        async onSubmit() {
            if (!this.validForm()) {
                return
            }
            this.showSpinner()
            const url = `${import.meta.env.VITE_API_URL}/register`
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            await sleep(1000)
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 200) {
                    this.hiddeErrorMessage()
                    response.json().then(data => {
                        auth.login(data.id, this.username, data.access_token)
                    }).catch((error) => {
                        console.error(error)
                        this.showErrorMessage()
                    })
                } else {
                    this.showErrorMessage()
                }
            })
            .catch(error => console.error(error))
            .finally(() => {
                this.hiddeSpinner()
            })
        }
    }
}
</script>
<template lang="">
    <section class="singup-container">
        <article class="singup">
            <h2>Singup</h2>
            <form @submit.prevent="onSubmit">
                <label for="username">Username</label>
                <p v-if="!validUsername && validUsername !== undefined">Username is not valid</p>
                <input type="text" id="username" name="username" required @input="onChange">
                <label for="email">Email</label>
                <p v-if="!validEmail && validEmail !== undefined">Email is not valid</p>
                <input type="email" id="email" name="email" required @input="onChange">
                <label for="password">Password</label>
                <p v-if="!validPassword && validPassword !== undefined">Email is not valid</p>
                <input type="password" id="password" name="password" required @input="onChange">
                <section id="singup__extra-info">
                    <article>
                        <label for="age">Age</label>
                        <input type="number" id="age" name="age" required @input="onChange" min="18" mix="100">
                    </article>
                    <article>
                        <label for="terms">Terms</label>
                        <input type="checkbox" name="terms" id="terms" required>
                    </article>
                </section>
                <input type="submit" :class="{ 'valid-submit': !validForm() }" value="Singup">
                <span v-if="fail">Credentials already in use</span>
                <section v-if="send" id="spinner-container">
                    <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
                    </div>
                </section>
            </form>  
        </article>
    </section>
</template>
<style lang="css" scoped>
    .singup-container {
        display: flex;
        justify-content: center;
        align-items: center;   
        background-color: var(--darker-green);
    }

    .singup {
        width: 40vh;
        color: var(--white);
        background-color: var(--dark-green);
        & h2 {
            text-align: center;
            font-family: 'Oswald', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 5vh;
        }
        border-radius: 5px;
        padding: 2vh;
    }

    form {
        width: 100%;
        padding: 16px;

        & > * {
            display: block;
        }

        & label {
            font-weight: 300;
            font-size: 2.75vh;
        }

        & p {
            color: var(--yellow);
            font-size: 2vh;
        }

        & input {
            border-radius: 2px;
            border: none;
            padding: 1vh;
        }
        
        & 
        input[type="text"], 
        input[type="password"], 
        input[type="email"], 
        textarea, 
        input[type="number"],
        input[type="checkbox"]  {
            margin-bottom: 8px;
            width: 100%;
            color: var(--white);
            margin-top: 2px;
            background-color: var(--medium-green);
        }

        & textarea {
            height: 13vh;
        }

        & input[type="submit"] {
            color: var(--white);
            background-color: var(--medium-green);
            margin-top: 16px;
            font-weight: 700;
            font-size: 2vh;
        }

        & span {
            margin-top: 16px;
            margin-bottom: 16px;
            color: var(--yellow);
            font-size: 3vh;
            text-align: center;
        }
    }

    #singup__extra-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & article {
            display: flex;
            flex-direction: column;
        }

        & article:last-child {
            align-items: center;
            & input[type="checkbox"] {
                height: 3.5vh;
                width: 3.5vh;
                background-color: -var(--black);
            }
        }

        & article input[type="number"] {
            display: block;
            width: 6vh;
            background-color: var(--medium-green);
        }
    }

    .valid-submit {
        filter: grayscale(80%);
    }

    @media (768px <= width) {
        .singup {
            width: 50vh;
        }

        form {
            & label {
                font-size: 2.75vh;
            }

            & input[type="password"], input[type="email"], textarea {
                margin-bottom: 16px;
                font-size: 1rem;
            }
        }
    }
    @media (1200px <= width) {}

    /* Spinner animation */

    #spinner-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spinner {
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;
    }

    .spinner > div {
        background-color: var(--white);
        height: 100%;
        width: 6px;
        display: inline-block;
        margin: 1px;
        
        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .spinner .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .spinner .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .spinner .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .spinner .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
        20% { -webkit-transform: scaleY(1.0) }
    }

    @keyframes sk-stretchdelay {
        0%, 40%, 100% { 
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }  20% { 
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
        }
    }
</style>