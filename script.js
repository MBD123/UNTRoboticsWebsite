var scrollPos = 0;
var splashHeight = 0;

$(document).ready(function()
{
  splashHeight = $(window).height() - 60;
  $("#view-splash").height(splashHeight);
  $("#view-menu").height($(window).height());
});

$(window).resize(function()
{
  splashHeight = $(window).height() - 60;
  $("#view-splash").height(splashHeight);
  $("#view-menu").height($(window).height());
});

$(window).scroll(function()
{
  scrollPos = $(window).scrollTop();
  if (scrollPos >= splashHeight)
  {
    $("#view-nav").css("position", "fixed");
    $("#view-nav").css("top", "0");
  }
  else
  {
    $("#view-nav").css("position", "absolute");
    $("#view-nav").css("top", splashHeight);
  }
});

$("#action-menu-close").click(function() {
  $("#view-menu").hide('fade');
});

$("#action-menu-open").click(function() {
  $("#view-menu").show('fade');
});

$('.view-menu-item').click(function() {
  $("#view-menu").hide('fade');
});

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 60
      }, 1000, 'easeInOutQuint');
      return false;
    }
  }
});