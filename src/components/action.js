import $ from 'jquery';

$(document).ready(function() {
    $(".navbar_hidden").click(function() {
        $(".navbar_show").slideToggle("fast");
    });
    $(".show").click(function() {
        $(".navbar_show").slideUp("fast");
    });
    $("#id1q").click(function() {
        $("#id1a").slideToggle("fast");
    });
    $("#id2q").click(function() {
        $("#id2a").slideToggle("fast")
    });
    $("#id3q").click(function() {
        $("#id3a").slideToggle("fast")
    });
    $("#id4q").click(function() {
        $("#id4a").slideToggle("fast")
    })
})