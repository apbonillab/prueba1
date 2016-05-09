var itemParent = {
    init: function () {
        var y = document.querySelector('.list')
        var className = document.getElementsByClassName("parent-start");
        for (var i = 0; i < className.length; i++) {
            className[i].addEventListener('click', function (e) {
                itemParent.animate(this);
            });
        }
    },
    animate: function animate(element) {
        function animateIn() {
            itemParent.hideAll();
            element.className = "parent-in";
            element.nextElementSibling.className = "child-show";
        }
        function animateOut() {
            element.className = "parent-out";
            element.nextElementSibling.className = "child-hide";
        }
        if (element.className === "parent-in")
            animateOut();
        else {
            animateIn();
        }
    },
    hideAll() {
        //TODO solve this bug
        var n = 1;
        while (n > 0) {
            var className = document.getElementsByClassName("parent-in");
            n = className.length;
            for (var i = 0; i < className.length; i++) {
                itemParent.animate(className[i]);
            }
        }
    }
}

itemParent.init();
