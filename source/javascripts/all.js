function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu-items") {
        x.className += " responsive";
    } else {
        x.className = "menu-items";
    }
}
