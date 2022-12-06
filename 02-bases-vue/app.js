
const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // `

    data(){
        return {
            quote: 'Soy batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            this.author = 'Luis Angel'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },
})

app.mount('#myApp')