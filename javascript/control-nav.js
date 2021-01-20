function button_activated(item) {
    var nav = document.getElementById(item);
    if ( nav.style.display == "none" ) {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    } 
}