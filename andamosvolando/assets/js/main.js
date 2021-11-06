$(document).ready(function () {
  $("#alojamientoDestino").select2({});
});

$(function () {
  $("input#alojamientoFechas").daterangepicker({
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY",
    },
  });
});

$("#popover-habs").on("click", ".mas, .menos", function (e) {
  let cantidad = $(this).siblings("#popover-habs .cantidad");
  let min = parseInt(cantidad.attr("min"));
  let max = parseInt(cantidad.attr("max"));
  e.preventDefault();
  let current_value = parseInt(cantidad.val());
  let classname = $(this).attr("class");
  if (classname === "menos") {
    if (current_value == min) {
      return;
    } else {
      cantidad.val(current_value - 1);
    }
  } else {
    if (current_value == max) {
      return;
    } else {
      cantidad.val(current_value + 1);
    }
  }
});

$("#popover-habs").on("click", "#mas-habs, #menos-habs", function (e) {
  let cantidad2 = $(this).siblings("#popover-habs .cantidad");
  let min2 = parseInt(cantidad2.attr("min"));
  let max2 = parseInt(cantidad2.attr("max"));
  e.preventDefault();
  let current_value2 = parseInt(cantidad2.val());
  let classname2 = $(this).attr("class");
  if (classname2 === "menos") {
    if (current_value2 < min2) {
      return;
    } else {
      let currentItem = current_value2 + 1;
      $("#hab" + currentItem).remove();
    }
  } else {
    if (current_value2 === max2) {
      if (!$("#hab" + current_value2).length) {
        createItemHabs(current_value2 + 1);
        let currentItem = current_value2 + 1;
        $("#hab" + currentItem - 1).after(itemHabs);
      }
      return;
    } else {
      createItemHabs(current_value2);
      let currentItem = current_value2 - 1;
      $("#hab" + currentItem).after(itemHabs);
    }
  }
});
$("#popover-habs #aplicar").on("click", function (e) {
  let sumPersons = 0;
  $('input[data="persons"]').each(function () {
    sumPersons = sumPersons + parseInt($(this).val());
    $("#nro-persons").val(sumPersons);
  });
  $("#nro-habs").val(parseInt($("#habs").val()));
  $("#popover-habs").removeClass("show");
});
$("#btn-habs").on("click", function (e) {
  $("#popover-habs").addClass("show");
});
$("html").on("click", function () {
  $("#popover-habs").removeClass("show");
});
$("#popover-habs, #btn-habs").on("click", function (e) {
  e.stopPropagation();
});
let itemHabs;
function createItemHabs(param) {
  itemHabs =
    '<div id="hab' +
    param +
    '">' +
    "<p><strong>Habitación</strong></p>" +
    '<div class="content-adult' +
    param +
    '">' +
    "<span class='me-3'>Adultos</span>" +
    "<div>" +
    '<button class="menos">' +
    '<i class="fa fa-minus"></i>' +
    "</button>" +
    '<input type="number" id="adult' +
    param +
    '" data="persons" class="cantidad" min="1" max="8" step="1" value="1" readonly>' +
    '<button class="mas">' +
    '<i class="fa fa-plus"></i>' +
    "</button>" +
    "</div>" +
    "</div>" +
    '<div class="content-child' +
    param +
    '">' +
    "<span class='me-3'>Niños</span>" +
    "<div>" +
    '<button class="menos" onclick="less(' +
    param +
    ', this)">' +
    '<i class="fa fa-minus"></i>' +
    "</button>" +
    '<input type="number" id="child' +
    param +
    '" data="persons" class="cantidad" min="0" max="8" step="1" value="0" readonly>' +
    '<button class="mas" onclick="mas(' +
    param +
    ', this)">' +
    '<i class="fa fa-plus"></i>' +
    "</button>" +
    "</div>" +
    "</div>" +
    "<hr>" +
    "</div>";
}
$(document).ready(function () {
  $(".dropdown-search-mobile .nav-link.active").each(function () {
    $("#dropdown-menu-search").html($(this).html());
  });
});
$(".dropdown-search-mobile .nav-link").on("click", function () {
  $("#dropdown-menu-search").html($(this).html());
});

const mas = (param, _this) => {
  const html = `
  <div class='content-age${param} py-2'>
    <span class="me-3">Edad del menor</span>
    <div>
      <select name="" id="" class="form-select">
        <option value="">1 año</option>
        <option value="">2 años</option>
        <option value="">3 años</option>
        <option value="">4 años</option>
        <option value="">5 años</option>
        <option value="">6 años</option>
        <option value="">7 años</option>
        <option value="">8 años</option>
        <option value="">9 años</option>
        <option value="">10 años</option>
        <option value="">11 años</option>
        <option value="">12 años</option>
        <option value="">13 años</option>
        <option value="">14 años</option>
        <option value="">15 años</option>
        <option value="">16 años</option>
        <option value="">17 años</option>
      </select>
    </div>
  </div>`;
  $(_this).parent().parent().after(html);
};

const less = (param, _this) => {
  if ($(".content-age" + param).length > 0) {
    $(".content-age" + param).last().remove();
  }
};

// ******************************************
// CALENDARIO DE VUELOS
// ******************************************
let classnameVuelos
let nroCol
$("[class^='col']").hover(function() {
  classnameVuelos = $(this).attr('class')
  nroCol = classnameVuelos.match(/\d+/)
  console.log(nroCol)
  $('.' + classnameVuelos).addClass('select')
  $(this).siblings('td').addClass('select')
}, function() {
  $('.' + classnameVuelos).removeClass('select')
  $(this).siblings('td').removeClass('select')
})