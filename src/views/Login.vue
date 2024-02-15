<script>
import { auth } from '../stores/auth';
import { sleep } from '../utils.js';

export default {
    data() {
        return {
            validEmail: undefined,
            validPassword: undefined,
            email: '',
            password: '',
            send: false,
            fail: false
        }
    },
    methods: {
        onChange(event) {
            // REGEX for name, email, subject, message
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            const regexPassword = /^[a-zA-Z0-9]{3,20}$/

            // Check if the input is valid
            if (event.target.name === 'email') {
                this.email = event.target.value
                this.validEmail = regexEmail.test(event.target.value)
            } else if (event.target.name === 'password') {
                this.password = event.target.value
                this.validPassword = regexPassword.test(event.target.value)
            }
        },
        validForm() {
            if (!this.validEmail || !this.validPassword) {
                return false
            }
            return this.validEmail && this.validPassword
        },
        async onSubmit() {
            if (!this.validForm()) {
                return
            }
            this.send = true;
            const url = `${import.meta.env.VITE_API_URL}/login`
            const data = {
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
                // If response is 200, save the token in auth.token
                if (response.status === 200) {
                    this.fail = false;
                    response.json().then(data => {
                        auth.id = data.id
                        auth.token = data.access_token
                        auth.user = data.username
                        auth.login()
                        this.$router.push({ name: 'Home'})
                    })
                } else {
                    this.fail = true;
                }
            })
            .catch(error => console.error(error))
            .finally(() => {
                this.send = false;
            })
        }
    }
}
</script>
<template lang="">
    <section class="login-container">
        <article class="login">
            <h2>Login</h2>
            <form @submit.prevent="onSubmit">
                <label for="email">Email</label>
                <p v-if="!validEmail && validEmail !== undefined">Email is not valid</p>
                <input type="email" id="email" name="email" required @input="onChange">
                <label for="password">Password</label>
                <p v-if="!validPassword && validPassword !== undefined">Email is not valid</p>
                <input type="password" id="password" name="password" required @input="onChange">
                <input type="submit" :class="{ 'valid-submit': !validForm() }" value="Login">
                <span v-if="fail">Wrong credentials</span>
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
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;   
        background-color: var(--darker-green);
    }

    .login {
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
        
        & input[type="password"], input[type="email"], textarea {
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

    .valid-submit {
        filter: grayscale(80%);
    }

    @media (768px <= width) {
        .login {
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