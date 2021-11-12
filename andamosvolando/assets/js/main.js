jQuery(document).ready(function ($) {
  $("#alojamientoDestino").select2({
    placeholder: 'País, Ciudad, Ubicación'
  });
  $("#vueloOrigen").select2({
    placeholder: 'País, Ciudad'
  });
  $("#vueloDestino").select2({
    placeholder: 'País, Ciudad'
  });
});
$(document).on('select2:open', () => {
  document.querySelector('.select2-search__field').focus();
});

(function ($) {
  $(".radio-vuelo").change(function () {
    if ($("#vueloSoloIda").is(':checked')) {
      $("#contentVueloRegreso").addClass("d-none");
    } else {
      $("#contentVueloRegreso").removeClass("d-none");
    }
  });
  
  $("input#alojamientoFechas").daterangepicker({
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY",
    },
  });
  
  $("input#alojamientoFechas").on("apply.daterangepicker", function (event, picker) {
    $('input[name="checkIn"]').val(picker.startDate.format("YYYY-MM-DD"));
    $('input[name="checkOut"]').val(picker.endDate.format("YYYY-MM-DD"));
  }
  );
  
  $("input#vueloSalida, input#vueloRegreso").daterangepicker({
    singleDatePicker: true,
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY",
    },
  });
  
  $("input#vueloSalida, input#vueloRegreso").on("apply.daterangepicker", function (event, picker) {
    $('input[name="checkIn"]').val(picker.startDate.format("YYYY-MM-DD"));
    $('input[name="checkOut"]').val(picker.endDate.format("YYYY-MM-DD"));
  }
  );
  
  $("#popover-habs, #popover-pasajeros").on("click", ".mas, .menos", function (e) {
    let cantidad = $(this).siblings(".cantidad");
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
  
  $("#popover-habs #aplicarHabs").on("click", function (e) {
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
  
  $("#popover-pasajeros #aplicarPasajeros").on("click", function (e) {
    let sumPasajeros = 0;
    $('input[data="pasajeros"]').each(function () {
      sumPasajeros = sumPasajeros + parseInt($(this).val());
      $("#nro-pasajeros").val(sumPasajeros);
    });
    $("#popover-habs").removeClass("show");
  });
  $("#btn-pasajeros").on("click", function (e) {
    $("#popover-pasajeros").addClass("show");
  });
  $("html").on("click", function () {
    $("#popover-pasajeros").removeClass("show");
  });
  $("#popover-pasajeros, #btn-pasajeros").on("click", function (e) {
    e.stopPropagation();
  });
})(jQuery);

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
  '" name="adults[]" data="persons" class="cantidad" min="1" max="8" step="1" value="1" readonly>' +
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
  '" name="children[]" data="persons" class="cantidad" min="0" max="8" step="1" value="0" readonly">' +
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

jQuery(document).ready(function ($) {
  $(".dropdown-search-mobile .nav-link.active").each(function () {
    $("#dropdown-menu-search").html($(this).html());
  });
  
  $(".dropdown-search-mobile .nav-link").on("click", function () {
    $("#dropdown-menu-search").html($(this).html());
  });
});

const mas = (param, _this) => {
  const html = `
  <div class='content-age${param} py-2'>
  <span class="w-50">Edad del menor</span>
  <div>
  <select id="" name="ages[]" class="form-select" >
  <option value="1">1 año</option>
  <option value="2">2 años</option>
  <option value="3">3 años</option>
  <option value="4">4 años</option>
  <option value="5">5 años</option>
  <option value="6">6 años</option>
  <option value="7">7 años</option>
  <option value="8">8 años</option>
  <option value="9">9 años</option>
  <option value="10">10 años</option>
  <option value="11">11 años</option>
  <option value="12">12 años</option>
  <option value="13">13 años</option>
  <option value="14">14 años</option>
  <option value="15">15 años</option>
  <option value="16">16 años</option>
  <option value="17">17 años</option>
  </select>
  </div>
  </div>`;
  jQuery(_this).parent().parent().after(html);
};

const less = (param, _this) => {
  if (jQuery(".content-age" + param).length > 0) {
    jQuery(".content-age" + param)
    .last()
    .remove();
  }
};