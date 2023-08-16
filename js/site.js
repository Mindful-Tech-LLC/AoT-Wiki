document.addEventListener("DOMContentLoaded", function () {
    var abtBtn = document.getElementById("aboutBtn");
    var bizBtn = document.getElementById("businessBtn");
    var abt = document.getElementById("about");
    var biz = document.getElementById("business");
    abt.style.display = "block";
    biz.style.display = "none";

    abtBtn.addEventListener("click", function () {
        abt.style.display = "block";
        biz.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    bizBtn.addEventListener("click", function () {
        abt.style.display = "none";
        biz.style.display = "block";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
})