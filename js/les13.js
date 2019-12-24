new Vue({

    el: '#app',
    data: {
        isActive: false,
        color: '',
        height: 0
    },
    computed: {
       circleClasses: function () {
            return {
                'background': this.color,
                'height': this.height + 'px'
            }
       }
    },
    methods: {

    }

});

