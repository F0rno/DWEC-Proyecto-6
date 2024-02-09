<template lang="">
    <section class="login-container">
        <article class="login">
            <h2>Login</h2>
            <form>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <input type="submit">
            </form>  
        </article>
    </section>
</template>
<script>
export default {
    
}
</script>
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
            color: var(--white);
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
                font-size: 2vh;
            }

            & input[type="password"], input[type="email"], textarea {
                margin-bottom: 16px;
                font-size: 1rem;
            }
        }
    }
    @media (1200px <= width) {}
</style>