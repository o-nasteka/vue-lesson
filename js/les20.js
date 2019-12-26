var vue1 = new Vue({

    el: '#app',
    data: {
        title: 'Hello Vue!'
    },
    methods: {
        updateFirstTitle: function () {
            this.title = 'New title!'
            this.$refs.heading.style.color = 'red'
            this.$refs.horLine.style.background = 'blue'
            console.log(document.querySelector('hr'))
        }
    },
    computed: {

    },
    watch: {

    }

});

