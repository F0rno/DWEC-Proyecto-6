<script>
export default {
    props: {
        defaultInput: {
            type: String,
            default: ''
        },
        defaultType: {
            type: String,
            default: 'book'
        },
        defaultSortedBy: {
            type: String,
            default: 'new'
        },
        onSubmit: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            input: this.defaultInput,
            type: this.defaultType,
            sortedBy: this.defaultSortedBy
        }
    },
    methods: {
        onChange(event) {            
            if (event.target.name === 'type') {
                this.type = event.target.value
            } else if (event.target.name === 'sortedby') {
                this.sortedBy = event.target.value
            } else {
                this.input = event.target.value
            }

            this.input = this.input === undefined ? '' : this.input
         
            const search = {
                title: this.input,
                type: this.type === 'book' ? 'B' : 'M',
                sort: this.sortedBy === 'new' ? 'N' : 'R'
            }
            this.onSubmit(search)
        }
    }
}
</script>
<template>
    <section class="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
        <input
            class="search__bar"
            type="text"
            v-model="input"
            @input="onChange"
            aria-label="main search bar"
        >
        <article class="search__filters">
            <select name="type" v-model="type" @input="onChange">
                <option value="book">Book</option>
                <option value="magazine">Magazine</option>
            </select>
            <select name="sortedby" v-model="sortedBy" @input="onChange">
                <option value="new">New</option>
                <option value="relevant">Relevant</option>
            </select>
        </article>
    </section>
</template>
<style lang="css" scoped>
    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        background-color: var(--darker-green);
        width: 90%;
        border-radius: 3vh;
        padding: 1vh;
    }

    .search svg {
        fill: var(--light-green);
        width: 4vh;
    }

    .search__bar {
        background-color: var(--darker-green);
        color: var(--light-green);
        border: none;
        padding: 1vh;
        width: 60%;
        font-size: 1.75vh;
        outline: none;
    }

    .search__filters input:focus {
        border: none;
        outline: none;
    }

    .search__filters {
        display: flex;
        justify-content: right;
    }

    .search__filters select {
        background-color: var(--darker-green);
        color: var(--light-green);
        border: none;
        padding: 1vh;
        border-left: solid 1px var(--light-green);
        appearance: none;
        text-align: center;
        font-size: 1.5vh;
    }

    .search__filters select:focus {
        outline: none;
    }

    .search__filters select option {
        border: none;
        border-radius: 1rem;
    }

    @media (768px <= width) {
        .search {
            width: 69%;
        }
        
        .search__bar {
            width: 100%;
        }
    }

    @media (1024px <= width) {
        .search {
            width: 50%;
        }
    }
</style>