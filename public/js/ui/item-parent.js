var itemParent = {
    init: function () {
        var className = document.getElementsByClassName("parent-start");
        for (var i = 0; i < className.length; i++) {
            className[i].addEventListener('click', function (e) {
                itemParent.animate(this);
            });
        }
        var navItems = document.querySelectorAll("ul a");
        for (var i = 0; i < navItems.length; i++) {
            if (navItems[i].className !== 'parent-start') {
                navItems[i].addEventListener('click', function (e) {
                    itemParent.hideAll();
                });
            }
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
