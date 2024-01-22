



// reveal effect
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);


//chang logo on scroll
window.onscroll = () => changeLogo();
//detect resize to change the logo
window.onresize = () => changeLogo();
//on loading
window.onload = () => changeLogo();

//FutureSolutionsnewlogo
function changeLogo() {
    //const mainLogo = "static/FTlogo2.png";
    //const landscapeLogo = "static/FTlogo2_landscape.png";
    //const miniLogo = "static/FTlogo2_minimal.png";

    const mainLogo = "static/FutureSolutionsnewlogo.png";
    const landscapeLogo = "static/FutureSolutionsnewlogo_landscape.png";
    const miniLogo = "static/FutureSolutionsnewlogo_minimal.png";

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header a > img").style.height = "5vh";
        document.getElementsByTagName("main")[0].style.top = "18vh"
        if (window.innerWidth <= 550)
            document.querySelector("header a > img").src = miniLogo;
        else
            document.querySelector("header a > img").src = landscapeLogo;
    }
    else {
        document.querySelector("header a > img").style.height = "18vh";
        document.querySelector("header a > img").style.top = "0px";
        if (window.innerWidth <= 550) {
            document.querySelector("header a > img").src = miniLogo;
            document.querySelector("header a > img").style.height = "5vh";
            document.getElementsByTagName("main")[0].style.top = "5vh"
        }
        else
            document.querySelector("header a > img").src = mainLogo;
    }
}