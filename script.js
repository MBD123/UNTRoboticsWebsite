/**
 * TODO
 * [ ] create an "idea submission" module
 * [ ] create a "meeting minutes" module (blog like?)
 * [ ] create animated splash
 * [ ] integrate a calendar
 * [ ] footer info
 *       - address
 *       - contacts
 *       - section links
 *       - page links
 * [ ] generate a roadmap for the future of the robotics club
 *     - to teach engineers the basics of robotics
 *     - to contribute to advanced projects and R&D through out UNT and the surrounding area
 *     - to educate UNT students about the future of robotics
 *     - to participate in competitions through out the nation and potentially the worldwide
 *     - to promote the prospect of enginnering and engineering with robotics
 *     - to combine the prowness of the software and hardware divisions in UNT to create
 *       a powerful association capable of generating state-of-the-art technologies
 * [ ] generate list of resources
 */

var scrollPos = 0;
var splashHeight = 0;

$(document).ready(function()
{
  splashHeight = $(window).height() - 60;
  $("#view-splash").height(splashHeight);
  $("#view-menu").height($(window).height());
  setNavbarPos();
});

$(window).resize(function()
{
  splashHeight = $(window).height() - 60;
  $("#view-splash").height(splashHeight);
  $("#view-menu").height($(window).height());
  setNavbarPos();
});

$(window).scroll(function()
{
  setNavbarPos();
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

function setNavbarPos()
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
}