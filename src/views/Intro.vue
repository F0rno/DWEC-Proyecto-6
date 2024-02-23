<script>

export default {
    methods: {
        login() {
            this.$router.push('/login')
        },
        singUp() {
            this.$router.push('/singup')
        }
    }
}
</script>
<template lang="">
    <div class="wrapper">
        <header class="intro__header">
            <img src="./../assets/Booky.png" alt="">
        </header>
        <main class="intro__main">
            <article class="intro__about">
                <h2>
                    Read as much as you can
                </h2>
                <section class="intro__main__about__presentation">
                    <p>
                        Hello, book lovers! Today, we're thrilled to introduce you to "Booky," your ultimate destination for all things literature
                    </p>
                    <p>
                        Booky is not just a library; it's a virtual haven for book enthusiasts, providing a seamless and immersive reading experience
                    </p>
                </section>
                <section class="intro__main__about__buttons">
                    <button v-on:click="login()">LOGIN</button>
                    <button v-on:click="singUp()">SING UP </button>
                </section>
            </article>
            <section class="intro__main__books">
                <picture>
                    <img src="../assets/don-quijote.png" alt="">
                    <picture>
                        <img src="../assets/don-quijote.png" alt="">
                    </picture>
                </picture>
            </section>
        </main>
    </div>
</template>
<style lang="css" scoped>
    .wrapper {
        min-height: 100vh;
        background-color: var(--darker-green);
        color: var(--white);
        display: grid;
        grid-template-rows: 256px auto;
    }

    .intro__header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--light-green);
        height: 256px;

        & img {
            max-width: 70%;
        }
    }

    .intro__main {
        margin: 32px;
        margin-top: 56px;

        & h2 {
            font-family: 'Oswald', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 40px;
            font-weight: 200;
            margin-top: 16px;
            margin-bottom: 32px;
        }
    }

    .intro__main__about__presentation {
        margin-bottom: 32px;
        & p {
            font-weight: 300;
            font-size: 18px;
            margin-bottom: 16px;
        }
    }

    .intro__main__about__buttons {
        & button {
            width: 100%;
            font-size: 18px;
            border-radius: 5px;
            height: 40px;
            color: var(--white);
            background-color: var(--medium-green);
            border: none;
            margin-bottom: 8px;
        }

        & button:hover {
            /*Cool pump like a heart*/
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;

        }
    }

    .intro__main__about__buttons > * {
        display: block;
    }

    .intro__main__books {
        display: none;
    }

    @media (768px <= width) {
        .intro__main {
            & h2 {
                font-size: 56px;
            }
        }

        .intro__main__about__presentation {
            & p {
                font-size: 24px;
                margin-bottom: 16px;
            }
        }

        .intro__main__about__buttons {
            & button {
                font-size: 20px;
            }
        }

        .intro__main__books {
            display: block;
            & picture  {
                display: flex;
                justify-content: space-around;
                & img {
                    max-width: 200px;
                }
            }
        }
    }

    @media (1024px <= width) {
        .intro__main {
            & h2 {
                font-size: 72px;
            }
        }

        .intro__main__about__presentation {
            & p {
                font-size: 30px;
                margin-bottom: 16px;
            }
        }

        .intro__main__about__buttons {
            & button {
                font-size: 32px;
                height: 56px;
            }
        }
    }

    @media (1200px <= width) {
        .intro__main {
            margin-top: 0px;
            margin-left: 92px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-self: center;
            & h2 {
                font-size: 72px;
            }
        }

        .intro__main__about {
            width: 50%;
        }

        .intro__main__about__presentation {
            & p {
                font-size: 24px;
                margin-bottom: 16px;
            }
        }

        .intro__main__about__buttons {
            & button {
                font-size: 28px;
                height: 56px;
            }
        }
        .intro__main__books {
            width: 50%;
            margin-top: 50px;
            display: flex;
            justify-content: center;

            & > picture {
                position: relative;
                width: 40vh;

                & > img {
                    max-width: 450px;
                    position: absolute;
                    top: 0;
                    left: -10;
                }

                & picture {
                    position: absolute;
                    top: 50px;
                    left: 81px;
                    & img {
                        max-width: 450px;
                    }
                }
            }  
        }
    }
</style>