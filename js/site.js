document.addEventListener("DOMContentLoaded", function () {
    var homeBtn = document.getElementById("homeBtn");
    var abtBtn = document.getElementById("aboutBtn");
    var bizBtn = document.getElementById("businessBtn");
    var home = document.getElementById("home");
    var abt = document.getElementById("about");
    var biz = document.getElementById("business");
    home.style.display = "block";
    abt.style.display = "none";
    biz.style.display = "none";

    homeBtn.addEventListener("click", function () {
        home.style.display = "block";
        abt.style.display = "none";
        biz.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    abtBtn.addEventListener("click", function () {
        abt.style.display = "block";
        biz.style.display = "none";
        home.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    bizBtn.addEventListener("click", function () {
        abt.style.display = "none";
        biz.style.display = "block";
        home.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
})