/**
 * navToogle sets events about navigation items
 * 
*/
var navToogle = {
    /**
     *init set event click to interactive elements 
     */
    init: function () {
        document.querySelector("#nav-icon")
            .addEventListener("click", function () {
                this.classList.toggle("open");
                navToogle.animate();
            });
        document.querySelector("#mask-container")
            .addEventListener("click", function () {
                document.querySelector("#nav-icon").classList.toggle("open");
                navToogle.animate();
                document.getElementById("mask-container").className = "";
            });
    },
    /**
    * animate set animaions classes about navToogle
    */
    animate: function () {
        /**
         * animateIn animations when navToogle in
         */
        function animateIn() {
            document.getElementById("navbar").className = "animated-in";
            document.getElementById("logo-mobile").className = "nav-logo-in";
            document.getElementById("mask-container").className = "mask";
            document.getElementById("container").className = "container-out";
        }
        /**
         * animateIn animations when navToogle out
         */
        function animateOut() {
            document.getElementById("navbar").className = "animated-out";
            document.getElementById("logo-mobile").className = "nav-logo-out";
            document.getElementById("mask-container").className = "";
            document.getElementById("container").className = "container-in";
            itemParent.hideAll();
        }

        if (document.getElementById("navbar").className === "animated-in")
            animateOut();
        else
            animateIn();
    }

}
