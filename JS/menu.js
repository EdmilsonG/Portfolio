function menuShow() {
    var ul = document.querySelector('nav ul');
    if (ul.classList.contains("active")) {
        ul.classList.remove("active");
    } else {
         ul.classList.add("active");
    }
}