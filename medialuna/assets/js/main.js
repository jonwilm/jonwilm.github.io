// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  changeColorNavbar();

  tabcontentInitial = document.querySelector(".tabcontent.tab-ppal");
  tabcontentInitial.style.display = "block";
});
$(window).scroll(function () {
  changeColorNavbar();
});
$(window).resize(function () {});
function changeColorNavbar() {
  if ($(window).scrollTop() > 100) {
    $("#pre-nav").css({
      height: "0px",
    });
    $(".navbar").css({
      "background-color": "#90ccc6",
    });
  } else {
    $("#pre-nav").css({
      height: "20px",
    });
    $(".navbar").css({
      "background-color": "#90ccc6aa",
    });
  }
}

$(function () {
  $(".box").click(function () {
    $("html, body").animate(
      { scrollTop: $("section.section2").offset().top },
      "slow"
    );
    return false;
  });
});

function openCity(evt, cardMenus) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cardMenus).style.display = "block";
  evt.currentTarget.className += " active";
}
