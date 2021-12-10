// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("bg-red");
  });
  changeColorNavbar();
  
  $("#open").click(function () {
    $(".menu-open").css("left", "0");
  });
  $("#close").click(function () {
    $(".menu-open").css("left", "-100%");
  });
});
$(window).scroll(function () {
  changeColorNavbar();
});
$(window).resize(function () {
  changeColorNavbar();
});
function changeColorNavbar() {
  if ($(window).scrollTop() > 80) {
    $(".navbar").css("background-color", "#00A9DC");
    $(".navbar-mobil").css("background-color", "#00A9DC");
  } else {
    $(".navbar").css("background-color", "transparent");
    $(".navbar-mobil").css("background-color", "transparent");
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

// ------------------------------------------------------------
// NEWSLETTER
// ------------------------------------------------------------
$('#btn-newsletter').click(function() {
  $('.placaNewsletter').css('display', 'block')
  $('.placaNewsletter').html(`
  <lottie-player src="https://assets5.lottiefiles.com/datafiles/8UjWgBkqvEF5jNoFcXV4sdJ6PXpS6DwF7cK4tzpi/Check Mark Success/Check Mark Success Data.json" background="transparent" speed="1" style="width: auto; height: 80%;" autoplay></lottie-player>
  <p>Enviado Correctamente</p>
  `)
})

// ------------------------------------------------------------
// RESERVAR MESA
// ------------------------------------------------------------
$(".close-reservar").click(function () {
  $(".ventanaGde").removeClass("animated fadeInUp delay-0-5s");
  $(".ventanaPeq").removeClass("animated fadeOutDown");
  $(".ventanaGde").addClass("animated fadeOutDown");
  $(".ventanaPeq").addClass("animated fadeInUp delay-0-5s");
});
$(".close-reservar-peq").click(function () {
  $(".ventanaGde").removeClass("animated fadeOutDown");
  $(".ventanaPeq").removeClass("animated fadeInUp delay-0-5s");
  $(".ventanaGde").addClass("animated fadeInUp delay-0-5s");
  $(".ventanaPeq").addClass("animated fadeOutDown");
});
// ------------------------------------------------------------
// PLACA MENU
// ------------------------------------------------------------
$(".btn-combos").hover(function() {
  $(this).siblings(".img-container").find(".inner-wrapper").css({ width: "200%", height: "200%" });
  $(this).siblings(".img-container").find(".placa-menu").css("opacity", 1);
  $(this).text("Ver más");
}, function() {
  $(this).siblings(".img-container").find(".inner-wrapper").css({ width: "160%", height: "160%" });
  $(this).siblings(".img-container").find(".placa-menu").css("opacity", 0);
  $(this).text($(this).attr('name-menu'));
});
$(".rombo-hover").hover(function() {
  let colCombos = $(this).parents(".col-combos");
  let btnCombos = colCombos.find(".btn-combos");
  $(this).parent(".inner-wrapper").css({ width: "200%", height: "200%" });
  $(this).siblings(".placa-menu").css("opacity", 1);
  btnCombos.text("Ver más");
  btnCombos.addClass('active');
}, function() {
  let colCombos = $(this).parents(".col-combos");
  let btnCombos = colCombos.find(".btn-combos");
  $(this).parent(".inner-wrapper").css({ width: "160%", height: "160%" });
  $(this).siblings(".placa-menu").css("opacity", 0);
  btnCombos.text(btnCombos.attr('name-menu'));
  btnCombos.removeClass('active');
});
$(".rombo-hover").on('click', function() {
  let modalOpen = $(this).parents(".col-combos").find(".btn-combos").attr('data-bs-target');
  $(modalOpen).modal("show");
});
