document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById("main-nav");
    var sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        var currentSection = "";

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - nav.offsetHeight;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.id;
            }
        });

        var activeLink = document.querySelector("a[href='#" + currentSection + "']");
        setActiveLink(activeLink);
    });
});

function setActiveLink(activeLink) {
    var links = document.querySelectorAll("#main-nav a");

    links.forEach(function (link) {
        link.classList.remove("active");
    });

    if (activeLink) {
        activeLink.classList.add("active");
    }
}
