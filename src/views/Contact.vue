<script>
import { sleep } from '../utils.js';

export default {
    data() {
        return {
            validName: undefined,
            validEmail: undefined,
            validSubject: undefined,
            validMessage: undefined,
            sending: false,
            send: false
        }
    },
    methods: {
        onChange(event) {
            this.sending = false;
            this.send = false;

            // REGEX for name, email, subject, message
            const regexName = /^[a-zA-Z0-9]{3,20}$/
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            const rgexSubject = /^[a-zA-Z0-9]{3,20}$/
            const regexMsg = /^[a-zA-Z0-9]{3,255}$/

            // Check if the input is valid
            if (event.target.name === 'name') {
                this.validName = regexName.test(event.target.value);
            } else if (event.target.name === 'email') {
                this.validEmail = regexEmail.test(event.target.value);
            } else if (event.target.name === 'subject') {
                this.validSubject = rgexSubject.test(event.target.value);
            } else if (event.target.name === 'message') {
                this.validMessage = regexMsg.test(event.target.value);
            }
        },
        validForm() {
            return this.validName && this.validEmail && this.validSubject && this.validMessage;
        },
        async onSubmit() {
            this.sending = true;
            await sleep(1000);
            this.sending = false;
            if (this.validForm()) {
                console.log('Form sent');
                this.send = true;
            }
        }
    }
}
</script>
<template lang="">
    <section class="contact-container">
        <article class="contact">
            <h2>Contact</h2>
            <form action="mailto:admin@admin.com" @submit.prevent="onSubmit">
                <label for="name">Name</label>
                <p v-if="!validName && validName !== undefined">Name is not valid</p>
                <input type="text" id="name" name="name" required @input="onChange">

                <label for="email">Email</label>
                <p v-if="!validEmail && validEmail !== undefined">Email is not valid</p>
                <input type="email" id="email" name="email" required @input="onChange">

                <label for="subject">Subject</label>
                <p v-if="!validSubject && validSubject !== undefined">Subject is not valid</p>
                <input type="text" id="subject" name="subject" required @input="onChange">

                <label for="message">Message</label>
                <p v-if="!validMessage && validMessage !== undefined">Message is not valid</p>
                <textarea id="message" name="message" required @input="onChange"></textarea>

                <input type="submit" value="Contact" :class="{ 'valid-submit': !validForm() }">

                <section v-if="sending" id="spinner-container">
                    <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
                    </div>
                </section>

                <span v-if="send">Message sent</span>
            </form>
        </article>
    </section>
</template>
<style lang="css" scoped>
    .contact-container {
        display: flex;
        justify-content: center;
        align-items: center;   
        background-color: var(--light-green);
    }

    .contact {
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
        
        & input[type="text"], input[type="email"], textarea {
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
            margin-top: 32px;
            font-weight: 700;
            font-size: 2vh;
        }

        & span {
            color: var(--white);
            font-size: 3vh;
            text-align: center;
        }
    }

    .valid-submit {
        filter: grayscale(80%);
    }

    @media (768px <= width) {
        .contact {
            width: 50vh;
        }

        form {
            & label {
                font-size: 2vh;
            }

            & input[type="text"], input[type="email"], textarea {
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