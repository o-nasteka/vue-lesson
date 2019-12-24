new Vue({

    el: '#app',
    data: {
        name: 'Vue.js!!!',
        number: 100,
        isOk: false,
        string: 'My name is Oleg',
        url: 'http://google.com',
        link: '<a target="_blank" href="http://google.com">Google</a>'
    },
    methods: {  
        sayHello: function () {
            return 'String Function!!! Hello'
        }
    }

})

