document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerDropdown = document.getElementById('hamburgerDropdown');
    const homeBtn = document.getElementById("homeBtn");
    const abtBtn = document.getElementById("aboutBtn");
    const bizBtn = document.getElementById("businessBtn");
    const homeBtn2 = document.getElementById("homeBtn2");
    const abtBtn2 = document.getElementById("aboutBtn2");
    const bizBtn2 = document.getElementById("businessBtn2");
    const home = document.getElementById("home");
    const abt = document.getElementById("about");
    const biz = document.getElementById("business");
    const mobileCountdown = document.getElementById("countdown-mobile");
    const pcCountdown = document.getElementById("countdown-pc");

    changeView();

    hamburgerMenu.addEventListener("click", function () {
        if (hamburgerDropdown.classList.contains("nav-active"))
            hamburgerDropdown.classList.remove("nav-active");
        else
            hamburgerDropdown.classList.add("nav-active");
    })

    homeBtn.classList.add("active");
    abtBtn.classList.remove("active");
    bizBtn.classList.remove("active");
    home.style.display = "block";
    abt.style.display = "none";
    biz.style.display = "none";

    window.addEventListener("resize", function () {
        changeView();
    })

    function changeView() {
        if (getWidth() < 800) {
            hamburgerMenu.style.display = "block";
            homeBtn.style.display = "none";
            abtBtn.style.display = "none";
            bizBtn.style.display = "none";
            mobileCountdown.style.display = "flex";
            pcCountdown.style.display = "none";
        }
        else {
            hamburgerMenu.style.display = "none";
            homeBtn.style.display = "block";
            abtBtn.style.display = "block";
            bizBtn.style.display = "block";
            mobileCountdown.style.display = "none";
            pcCountdown.style.display = "flex";
        }
    }

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

    homeBtn.addEventListener("click", function () {
        homeBtn.classList.add("active");
        abtBtn.classList.remove("active");
        bizBtn.classList.remove("active");
        home.style.display = "block";
        abt.style.display = "none";
        biz.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    abtBtn.addEventListener("click", function () {
        homeBtn.classList.remove("active");
        abtBtn.classList.add("active");
        bizBtn.classList.remove("active");
        abt.style.display = "block";
        biz.style.display = "none";
        home.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    bizBtn.addEventListener("click", function () {
        homeBtn.classList.remove("active");
        abtBtn.classList.remove("active");
        bizBtn.classList.add("active");
        abt.style.display = "none";
        biz.style.display = "block";
        home.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    homeBtn2.addEventListener("click", function () {
        homeBtn.classList.add("active");
        abtBtn.classList.remove("active");
        bizBtn.classList.remove("active");
        home.style.display = "block";
        abt.style.display = "none";
        biz.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    abtBtn2.addEventListener("click", function () {
        homeBtn.classList.remove("active");
        abtBtn.classList.add("active");
        bizBtn.classList.remove("active");
        abt.style.display = "block";
        biz.style.display = "none";
        home.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    bizBtn2.addEventListener("click", function () {
        homeBtn.classList.remove("active");
        abtBtn.classList.remove("active");
        bizBtn.classList.add("active");
        abt.style.display = "none";
        biz.style.display = "block";
        home.style.display = "none";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
})

// setInterval(function () {
//     const timeDifference = new Date(1699110000 * 1000).getTime() - new Date().getTime();

//     const mdys = document.getElementById("ct-md");
//     const mhrs = document.getElementById("ct-mh");
//     const mmns = document.getElementById("ct-mm");
//     const mscs = document.getElementById("ct-ms");

//     const dys = document.getElementById("ctd");
//     const hrs = document.getElementById("cth");
//     const mns = document.getElementById("ctm");
//     const scs = document.getElementById("cts");

//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//     dys.innerHTML = `${days}<br><span>days</span>`;
//     hrs.innerHTML = `${hours}<br><span>hours</span>`;
//     mns.innerHTML = `${minutes}<br><span>minutes</span>`;
//     scs.innerHTML = `${seconds}<br><span>seconds</span>`;

//     mdys.innerHTML = `${days}<br><span>days</span>`;
//     mhrs.innerHTML = `${hours}<br><span>hours</span>`;
//     mmns.innerHTML = `${minutes}<br><span>minutes</span>`;
//     mscs.innerHTML = `${seconds}<br><span>seconds</span>`;
// }, 500)