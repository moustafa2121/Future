window.onscroll = () => { 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header a > img").style.height = "5vh";
        document.querySelector("header a > img").src = "static/FTlogo2_landscape.png";

    }
    else {
        document.querySelector("header a > img").src = "static/FTlogo2.png";
        document.querySelector("header a > img").style.height = "18vh";
        document.querySelector("header a > img").style.top = "0px";
    }
}

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