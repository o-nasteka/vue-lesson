var vue1 = new Vue({

    el: '#app',
    data: {
        title: 'Hello Vue!'
    },
    methods: {
        alertFast: function () {
            alert('From Vue #1')
        }
    },
    computed: {

    },
    watch: {

    }

});

console.log(vue1);

// vue1.newField = 'Random text'

new Vue({
    el: '#app2',
    data: {
        title: 'Hello 2'
    },
    methods: {
        updateFirstTitle: function () {
            vue1.title = 'Update vue title'
            vue1.newField = 'New newField!'

            setTimeout(function() {
                vue1.alertFast()
            },1000)
        }
    }
});

