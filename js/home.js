$(document).ready(function() {
    $("#mobile_menu_btn").on("click", function(e) {
        e.preventDefault();
        $("#mobile_menu").slideToggle();
    })
});