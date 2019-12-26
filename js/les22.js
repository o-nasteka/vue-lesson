var vue = new Vue({

    // el: '#app',
    data: {
        title: 'Hello Vue!'
    },
    methods: {
        doDestroy: function () {
            this.$destroy()
        }
    },
    computed: {

    },
    watch: {

    },
    beforeCreate: function () {
        console.log('Before Create')
    },
    created: function () {
        console.log('Created')
    },
    beforeMount: function () {
        console.log('beforeMount')
    },
    mounted: function () {
        console.log('mounted')
    },
    beforeUpdate: function () {
        console.log('beforeUpdate')
    },
    updated: function () {
        console.log('Updated')
    },
    beforeDestroy: function () {
        console.log('Before destroy')
    },
    destroyed: function () {
        console.log('Destroyed')
    }
});

vue.$mount('#app')


