window.onscroll = () => { 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByTagName("header")[0].style.padding = "2px 0px";
        document.querySelector("header a > img").style.height = "20px";
        document.querySelector("header a > img").style.top = "10px";
    }
    else {
        document.getElementsByTagName("header")[0].style.padding = "12px 0px";
        document.querySelector("header a > img").style.height = "50px";
        document.querySelector("header a > img").style.top = "5px";
    }
}