/* Fadein & Fadeout sections */
var current_tag, sec_fadein, sec_fadeout;
current_tag = 0;
sec_fadeout = 800; /* Fadeout Time */
sec_fadein = 800; /* Fadein Time */

$(document).ready(function($) {
  $("a", ".nav").click(function() {
    if (!$(this).hasClass("active")) {
      current_tag = this;
      $(".sec:visible").fadeOut(sec_fadeout, function() {
        var new_sec;
        $("a", ".nav").removeClass("active");
        $(current_tag).addClass("active");
        new_sec = $($(current_tag).attr("href"));
        new_sec.fadeIn(sec_fadein);
      });
    }
    return false;
  });
});

/* Nav Toggle */
$(document).ready(function($) {
  $("#navMove").click(function() {
    $("#nav").toggleClass("nav-toggle");
    if ($("#navMove i").hasClass("fa fa-toggle-on")) {
      $("#navMove i").removeClass("fa fa-toggle-on");
      $("#navMove i").addClass("fa fa-toggle-off");
    } else {
      $("#navMove i").removeClass("fa fa-toggle-off")
      $("#navMove i").addClass("fa fa-toggle-on");
    }
  });
});




