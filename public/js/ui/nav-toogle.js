document.querySelector("#nav-icon")
    .addEventListener("click", function () {
        this.classList.toggle("open");
        animate();
    });
    
/**Animation translation logic*/
function animate() {
    function animateIn() {
        document.getElementById("navbar").className = "animated-in";
        document.getElementById("container").className = "translucent-in";
    }
    function animateOut() {
        document.getElementById("navbar").className = "animated-out";
        document.getElementById("container").className = "";
        itemParent.hideAll();
    }
    if (document.getElementById("navbar").className === "animated-in")
        animateOut();
    else
        animateIn();
}
