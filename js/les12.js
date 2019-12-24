new Vue({

    el: '#app',
    data: {
        isActive: false,
        color: ''
    },
    computed: {
        getCssClasses: function () {
            return {
                'red': this.isActive,
                'green': !this.isActive
            }
        }
    },
    methods: {

    }

});

