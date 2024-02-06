<script>
export default {
}
</script>
<template lang="">
    <section class="contact-container">
        <article class="contact">
            <h2>Contact</h2>
            <form action="mailto:admin@admin.com">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required>

                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Contact">
            </form>
        </article>
    </section>
</template>
<style lang="css" scoped>
    .contact-container {
        display: flex;
        justify-content: center;
        align-items: center;   
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
        padding: 16px;
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

        & input {
            border-radius: 2px;
            border: none;
            padding: 0.5rem;
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
    }

    @media (768px <= width) {
        .contact {
            width: 50vh;
        }

        form {
            & label {
                font-size: 2rem;
            }

            & input[type="text"], input[type="email"], textarea {
                margin-bottom: 16px;
                font-size: 1rem;
            }
        }
    }
    @media (1200px <= width) {}
</style>