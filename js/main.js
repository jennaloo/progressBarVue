new Vue({
    el: '#main',
    data: {
        progress: 0
    },
    methods: {
        start: function () {
            var vm = this;
            var width = 5;
            var increase = setInterval(function () {
                vm.progress += width;
                if (vm.progress >= 100) {
                    clearInterval(increase);
                    $("#progressBarInner").css("background-color", "green");
                }
            }, 1000);
        },
    }
})
