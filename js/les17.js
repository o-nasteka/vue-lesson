new Vue({

    el: '#app',
    data: {
        counter: 0,
        // condition: ''
        counter2: 0
    },
    methods: {
        add: function () {
            this.counter++
            // this.condition = this.counter > 3 ? 'More than three' : 'Less than three' // change on result() func
        },
        sub: function () {
            this.counter--
            // this.condition = this.counter > 3 ? 'More than three' : 'Less than three'
        },
        result: function () {
            console.log('Result')
            return this.counter > 3 ? 'More than three' : 'Less than three'
        }
    },
    computed: {
        computedResult: function () {
            console.log('Computed result')
            return this.counter2 > 3 ? 'More than three' : 'Less than three'
        }
    }

});

