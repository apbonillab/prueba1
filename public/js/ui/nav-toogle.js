/**Set event click toogle to hamburguer icon*/
document.querySelector("#nav-icon")
    .addEventListener("click", function () {
        this.classList.toggle("open");
        animate();
    });
/**
 * Animates the hamburger icon
 */
function animate() {
    function animateIn() {
        document.getElementById("navbar").className = "animated-in";
        document.getElementById("container").className = "translucent-in";
        document.getElementById("logo-mobile").className = "nav-logo-in";
        document.getElementById("mask-container").className = "mask";

    }
    function animateOut() {
        document.getElementById("navbar").className = "animated-out";
        document.getElementById("container").className = "";
        document.getElementById("logo-mobile").className = "nav-logo-out";
        document.getElementById("mask-container").className = "";
        itemParent.hideAll();
    }
    if (document.getElementById("navbar").className === "animated-in")
        animateOut();
    else
        animateIn();
}
