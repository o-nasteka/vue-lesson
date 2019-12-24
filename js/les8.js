new Vue({

    el: '#app',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        handleMouseMove: function (event) {
            this.x = event.clientX
            this.y = event.clientY
        },
        alertValue: function (event) {
            alert(event.target.value)
        }
    }

});

