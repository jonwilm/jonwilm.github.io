// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("bg-red");
  });
  changeSizeNavbar();
  
  $("#open").click(function () {
    $(".menu-open").css("right", "0");
  });
  $("#close").click(function () {
    $(".menu-open").css("right", "-100%");
  });
});
$(window).scroll(function () {
  changeSizeNavbar();
});
$(window).resize(function () {
  changeSizeNavbar();
});
function changeSizeNavbar() {
  if ($(window).scrollTop() > 80) {
    if ($(window).width() > 1200) {
      $(".logo-navbar").css("height", "80px");
    } else {
      $(".logo-navbar").css("height", "40px");
    }
  } else {
    if ($(window).width() > 1200) {
      $(".logo-navbar").css("height", "100px");
    } else {
      $(".logo-navbar").css("height", "60px");
    }
  }
}

// ------------------------------------------------------------
// AUTOMATIC DROPDOWN
// ------------------------------------------------------------
$(".dropdown").hover(function() {
  if ($(window).width() > 1200) {
    $("a", this).addClass("show");
    $("a", this).attr("aria-expanded", "true");
    $(".dropdown-menu", this).addClass("show");
    $(".dropdown-menu", this).attr("data-bs-popper", "none");
  }
}, function() {
  if ($(window).width() > 1200) {
    $("a", this).removeClass("show");
    $("a", this).attr("aria-expanded", "false");
    $(".dropdown-menu", this).removeClass("show");
    $(".dropdown-menu", this).removeAttr("data-bs-popper");
  }
});