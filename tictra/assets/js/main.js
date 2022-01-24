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
  $(".btn-user").hover(
    function () {
      $(".popup-login").fadeIn(300);
    },
    function () {
      setTimeout(() => {
        if ($(".popup-login").is(":hover")) {
          console.log("Estoy en popup");
        } else {
          $(".popup-login").fadeOut(300);
        }
      }, 100);
    }
  );
  $(".popup-login").hover(
    function () {},
    function () {
      setTimeout(() => {
        if ($(".btn-user").is(":hover")) {
          console.log("Estoy en boton");
        } else {
          $(".popup-login").fadeOut(300);
        }
      }, 100);
    }
  );
});
$(window).scroll(function () {
  changeColorNavbar();
});
$(window).resize(function () {
  changeColorNavbar();
});
function changeColorNavbar() {
  if ($(window).scrollTop() > 80) {
    $(".navbar").css("background", "#4524CB");
    $(".navbar-mobil").css("background", "#4524CB");
  } else {
    $(".navbar").css("background", "transparent");
    $(".navbar-mobil").css("background", "transparent");
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