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
            this.onSubmit(this.input, this.type, this.sortedBy)
        }
    }
}
</script>
<template>
    <section>
        <article>
            <input
                type="text"
                v-model="input"
                @input="onChange"
            >
            <section>
                <select name="type" v-model="type" @input="onChange">
                    <option value="book">Book</option>
                    <option value="magazine">Magazine</option>
                </select>
                <select name="sortedby" v-model="sortedBy" @input="onChange">
                    <option value="new">New</option>
                    <option value="relevant">Relevant</option>
                </select>
            </section>
        </article>
    </section>
</template>
<style lang="" scoped>
    
</style>