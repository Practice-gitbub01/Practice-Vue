const { createApp } = Vue;

createApp({
    data() {
        return {
            bool: false,
            message: 'Hello Vue 3!',
            vforlist: ["A", "B", "C"]
        }
    },
    methods: {
        Rebool() {
            this.bool = false
        },
        changeMessage() {
            this.message = (this.bool) ? "A" : "B"
            this.bool = !this.bool
        },
        vif() {
            this.bool = !this.bool
        }
    }
}).mount('#app')