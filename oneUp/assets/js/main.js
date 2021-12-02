// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("bg-red");
  });
  changeColorNavbar();

  $(".btn-user").hover(
    function () {
      $(".popup-login").fadeIn(300);
    },
    function () {
      setTimeout(() => {
        if ($(".popup-login:hover").length > 0) {
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
        if ($(".btn-user:hover").length > 0) {
          console.log("Estoy en boton");
        } else {
          $(".popup-login").fadeOut(300);
        }
      }, 100);
    }
  );

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
    $(".navbar").css("background-color", "#e4002b");
    $(".navbar-mobil").css("background-color", "#e4002b");
  } else {
    $(".navbar").css("background-color", "transparent");
    $(".navbar-mobil").css("background-color", "transparent");
  }
}

// ------------------------------------------------------------
// AUTOMATIC DROPDOWN
// ------------------------------------------------------------
$(".dropdown").hover(
  function () {
    if ($(window).width() > 1200) {
      $("a", this).addClass("show");
      $("a", this).attr("aria-expanded", "true");
      $(".dropdown-menu", this).addClass("show");
      $(".dropdown-menu", this).attr("data-bs-popper", "none");
    }
  },
  function () {
    if ($(window).width() > 1200) {
      $("a", this).removeClass("show");
      $("a", this).attr("aria-expanded", "false");
      $(".dropdown-menu", this).removeClass("show");
      $(".dropdown-menu", this).removeAttr("data-bs-popper");
    }
  }
);

// ------------------------------------------------------------
// CAROUSEL WELCOME HOME
// ------------------------------------------------------------
$('.slider-card-item').on('click', function() {
  let thisSlide = $(this)
  if (thisSlide.hasClass('slider-card-item--right')) {
    clickSlideRight(thisSlide)
  }
  if (thisSlide.hasClass('slider-card-item--left')) {
    clickSlideLeft(thisSlide)
  }
})
$('.content-button-slider button').on('click', function() {
  if ($(this).hasClass('prev-slider')) {
    $('.slider-card-item.slider-card-item--left').click()
  }
  if ($(this).hasClass('next-slider')) {
    $('.slider-card-item.slider-card-item--right').click()
  }
})
function clickSlideRight(thisSlide) {
  $('.slider-card-item.slider-card-item--left').removeClass('slider-card-item--left').addClass('slider-card-item--right')
  $('.slider-card-item.slider-card-item--center').removeClass('slider-card-item--center').addClass('slider-card-item--left')
  thisSlide.removeClass('slider-card-item--right').addClass('slider-card-item--center')
}
function clickSlideLeft(thisSlide) {
  $('.slider-card-item.slider-card-item--right').removeClass('slider-card-item--right').addClass('slider-card-item--left')
  $('.slider-card-item.slider-card-item--center').removeClass('slider-card-item--center').addClass('slider-card-item--right')
  thisSlide.removeClass('slider-card-item--left').addClass('slider-card-item--center')
}
// ------------------------------------------------------------
// PRODUCTOS
// ------------------------------------------------------------
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
// ------------------------------------------------------------
// LOGOS EMPRESAS
// ------------------------------------------------------------
$(window).ready(function() {
  let intervalLogos
  let mobile = "mobile"
  let desktop = "desktop"
  if ($(window).width() < 768) {
    clearInterval(intervalLogos)
    changeLogos(mobile)
  } else {
    clearInterval(intervalLogos)
    changeLogos(desktop)
  }
})
$(window).resize(function() {
  let mobile = "mobile"
  let desktop = "desktop"
  if ($(window).width() < 768) {
    clearInterval(intervalLogos)
    changeLogos(mobile)
  } else {
    clearInterval(intervalLogos)
    changeLogos(desktop)
  }
})
function changeLogos(resolucion) {
  let change_logos_time = 5000
  let currentIndex = 0;
  $(".logos-" + resolucion + " .content-logos:not(:eq("+ currentIndex +"))").hide();
  let totalDiv = $(".logos-" + resolucion + " .content-logos").length;
  intervalLogos = setInterval(function(){
      currentIndex = (currentIndex + 1) % totalDiv;
      $(".logos-" + resolucion + " .content-logos").hide();
      $(".logos-" + resolucion + " .content-logos").eq(currentIndex).show();
  }, change_logos_time);
}
// ------------------------------------------------------------
// NEWSLETTER
// ------------------------------------------------------------
$('#btn-newsletter').click(function() {
  $('.placaNewsletter').fadeIn(300)
})