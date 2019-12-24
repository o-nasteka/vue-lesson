new Vue({

    el: '#app',
    data: {
        counter: 0,
        counter2: 0
    },
    methods: {
        riseCounter: function () {
            this.counter++
        },
        decreaseCounter: function () {
            if(this.counter !== 0){
                this.counter--
            } else {
                this.counter = 0
            }
        },
        onHover: function (event) {
            event.target.style.color = 'red'
        }
    }

});

