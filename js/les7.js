new Vue({

    el: '#app',
    data: {
        title: 'Счетчик',
        counter: 0
    },
    methods: {
        riseCounter: function (num, str, event) {
            this.counter += num
            this.title = str

            if (num === 5) {
                // blue
                event.target.style.color = 'blue'
            } else if (num === 10){
                // red
                event.target.style.color = 'red'
            }
        }
    }

});

