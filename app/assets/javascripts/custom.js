var current_tag, section_fadein, section_fadeout;

current_tag = 0;

section_fadeout = 800;

section_fadein = 800;

$(document).ready(function($) {
  $("a", ".nav").click(function() {
    if (!$(this).hasClass("active")) {
      current_tag = this;
      $(".section:visible").fadeOut(section_fadeout, function() {
        var new_section;
        $("a", ".nav").removeClass("active");
        $(current_tag).addClass("active");
        new_section = $($(current_tag).attr("href"));
        new_section.fadeIn(section_fadein);
      });
    }
    return false;
  });
});

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




