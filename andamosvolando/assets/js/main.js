jQuery(document).ready(function ($) {
  var Wookapis = {
    'ajax_url': 'https://staging.andamosvolando.joseayram.com/wp-admin/admin-ajax.php',
  };

  $("#alojamientoDestino").select2({
    language: 'es',
    placeholder: 'Ubicación, País',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
            action: 'hotelbeds_hotels_destinations',
            q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });

  $("#vueloOrigen").select2({
    placeholder: 'Aeropuerto, Ciudad, País',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
          action: 'amadeus_flights_destinations',
          q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });

  $("#vueloDestino").select2({
    placeholder: 'Aeropuerto, Ciudad, País',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
            action: 'amadeus_flights_destinations',
            q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });

  $("#actividadDestino").select2({
    placeholder: 'País, Ciudad, Ubicación'
  });

  $("#transferenciaOrigen").select2({
    placeholder: 'Origen',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
          action: 'hotelbeds_transfers_destinations',
          q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });

  $("#transferenciaOrigen").on('change', function(e) {
    let type = 'IATA';
    if(typeof $(this).select2('data')[0] !== "undefined") {
      type = $(this).select2('data')[0].type;
    }
    $("#fromType").val(type);
  });

  $("#transferenciaDestino").select2({
    placeholder: 'Destino',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
          action: 'hotelbeds_transfers_destinations',
          q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });

  $("#transferenciaDestino").on('change', function(e) {
    let type = 'IATA';
    if(typeof $(this).select2('data')[0] !== "undefined") {
      type = $(this).select2('data')[0].type;
    }
    $("#toType").val(type);
  });

  $("#seguroContinente").select2({
    placeholder: 'Continente'
  });
  $("#seguroPais").select2({
    placeholder: 'País'
  });

  $("#autosRetiro").select2({
    placeholder: 'Ciudad, Aeropuerto',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
          action: 'amadeus_flights_destinations',
          q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });

  $("#autosDevolucion").select2({
    placeholder: 'Ciudad, Aeropuerto',
    minimumInputLength: 3,
    ajax: {
      url: Wookapis.ajax_url,
      dataType: 'json',
      data: function (params) {
        var query = {
            action: 'amadeus_flights_destinations',
            q: $.trim(params.term)
        }
        return query;
      },
      processResults: function (data) {
        return {
            results: data
        };
      },
      cache: true
    }
  });
});

jQuery(document).on('select2:open', () => {
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
  $(".radio-transferencia").change(function () {
    if ($("#transferenciaSoloIda").is(':checked')) {
      $("#contentTransferenciaRegreso").addClass("d-none");
    } else {
      $("#contentTransferenciaRegreso").removeClass("d-none");
    }
  });
  $("#checkDevolucionAuto").change(function () {
    if ($(this).is(':checked')) {
      $("#contentLugarDevolucion").removeClass("d-none");
      $("#contentLugarRetiro").removeClass("w-100").addClass("w-50");
    } else {
      $("#contentLugarDevolucion").addClass("d-none");
      $("#contentLugarRetiro").removeClass("w-50").addClass("w-100");
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
  });

  $("input#vueloSalida, input#vueloRegreso").daterangepicker({
    singleDatePicker: true,
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY",
    },
  });

  $("input#vueloSalida").on("apply.daterangepicker", function (event, picker) {
        $('input[name="depart_date"]').val(picker.startDate.format("YYYY-MM-DD"));
    });

  $("input#vueloRegreso").on("apply.daterangepicker", function (event, picker) {
      $('input[name="return_date"]').val(picker.endDate.format("YYYY-MM-DD"));
  });

  $("input#actividadFechas").daterangepicker({
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY",
    },
  });

  $("input#actividadFechas").on("apply.daterangepicker", function (event, picker) {
    $('input[name="checkIn"]').val(picker.startDate.format("YYYY-MM-DD"));
    $('input[name="checkOut"]').val(picker.endDate.format("YYYY-MM-DD"));
  });

  $("input#transferenciaSalida, input#transferenciaRegreso").daterangepicker({
    singleDatePicker: true,
    autoApply: true,
    timePicker: true,
    timePickerIncrement: 15,
    timePicker24Hour: true,
    timePickerSeconds: false,
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY HH:mm",
    },
  });

  $("input#transferenciaSalida").on("apply.daterangepicker", function (event, picker) {
    $('input[name="outbound"]').val(picker.startDate.format("YYYYMMDDHHmm")+'00');
  });

  $("input#transferenciaRegreso").on("apply.daterangepicker", function (event, picker) {
    $('input[name="inbound"]').val(picker.endDate.format("YYYYMMDDHHmm")+'00');
  });

  $("input#seguroInicio, input#seguroFin").daterangepicker({
    singleDatePicker: true,
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY",
    },
  });

  $("input#seguroInicio, input#seguroFin").on("apply.daterangepicker", function (event, picker) {
    $('input[name="checkIn"]').val(picker.startDate.format("YYYY-MM-DD"));
    $('input[name="checkOut"]').val(picker.endDate.format("YYYY-MM-DD"));
  });

  $("input#autosFechaRetiro, input#autosFechaDevolucion").daterangepicker({
    singleDatePicker: true,
    autoApply: true,
    timePicker: true,
    timePickerIncrement: 15,
    timePicker24Hour: true,
    timePickerSeconds: false,
    startDate: moment(),
    endDate: moment().add(1, "day"),
    autoApply: true,
    locale: {
      format: "DD/MM/YYYY HH:mm",
    },
  });

  $("input#autosFechaRetiro").on("apply.daterangepicker", function (event, picker) {
    $('input[name="outbound"]').val(picker.startDate.format("YYYYMMDDHHmm")+'00');
  });

  $("input#autosFechaDevolucion").on("apply.daterangepicker", function (event, picker) {
    $('input[name="inbound"]').val(picker.endDate.format("YYYYMMDDHHmm")+'00');
  });

  $("#popover-habs, #popover-pasajeros, #popover-act, #popover-transf-pasajeros, #popover-seguro").on("click", ".mas, .menos", function (e) {
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
      if (!$("#hab" + current_value2).length) {
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
    $("#popover-pasajeros").removeClass("show");
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

  $("#popover-act").on("click", "#mas-act, #menos-act", function (e) {
    let cantidad3 = $(this).siblings("#popover-act .cantidad");
    let min3 = parseInt(cantidad3.attr("min"));
    let max3 = parseInt(cantidad3.attr("max"));
    e.preventDefault();
    let current_value3 = parseInt(cantidad3.val());
    let classname3 = $(this).attr("class");

    if (classname3 === "menos") {
      if (current_value3 < min3) {
        return;
      } else {
        let currentItem = current_value3 + 1;
        $("#act" + currentItem).remove();
      }
    } else {
      if (!$("#act" + current_value3).length) {
        createItemActs(current_value3);
        let currentItem = current_value3 - 1;
        $("#act" + currentItem).after(itemActs);
      }
    }
  });

  $("#popover-act #aplicarAct").on("click", function (e) {
    let edadact = '';
    $('input[data="edadact"]').each(function () {
      if (edadact == '') {
        edadact += parseInt($(this).val());
      } else {
        edadact += ', ' + parseInt($(this).val());
      }
    });
    $("#edadPersons").val(edadact);
    $("#popover-act").removeClass("show");
  });
  $("#btn-act").on("click", function (e) {
    $("#popover-act").addClass("show");
  });
  $("html").on("click", function () {
    $("#popover-act").removeClass("show");
  });
  $("#popover-act, #btn-act").on("click", function (e) {
    e.stopPropagation();
  });

  $("#popover-transf-pasajeros #aplicarTransfPasajeros").on("click", function (e) {
    let sumTransfPasajeros = 0;
    $('input[data="transf-pasajeros"]').each(function () {
      sumTransfPasajeros = sumTransfPasajeros + parseInt($(this).val());
      $("#nro-transf-pasajeros").val(sumTransfPasajeros);
    });
    $("#popover-transf-pasajeros").removeClass("show");
  });
  $("#btn-transf-pasajeros").on("click", function (e) {
    $("#popover-transf-pasajeros").addClass("show");
  });
  $("html").on("click", function () {
    $("#popover-transf-pasajeros").removeClass("show");
  });
  $("#popover-transf-pasajeros, #btn-transf-pasajeros").on("click", function (e) {
    e.stopPropagation();
  });

  $("#popover-seguro").on("click", "#mas-seguro, #menos-seguro", function (e) {
    let cantidad4 = $(this).siblings("#popover-seguro .cantidad");
    let min4 = parseInt(cantidad4.attr("min"));
    let max4 = parseInt(cantidad4.attr("max"));
    e.preventDefault();
    let current_value4 = parseInt(cantidad4.val());
    let classname4 = $(this).attr("class");
    console.log(current_value4)
    console.log(max4)
    if (classname4 === "menos") {
      if (current_value4 < min4) {
        return;
      } else {
        let currentItem = current_value4 + 1;
        $("#seguro" + currentItem).remove();
      }
    } else {
      if (!$("#seguro" + current_value4).length) {
        createItemSeguro(current_value4);
        let currentItem = current_value4 - 1;
        $("#seguro" + currentItem).after(itemSeguro);
      }
    }
  });

  $("#popover-seguro #aplicarSeguro").on("click", function (e) {
    let edadseguro = '';
    $('input[data="edadseguro"]').each(function () {
      if (edadseguro == '') {
        edadseguro += parseInt($(this).val());
      } else {
        edadseguro += ', ' + parseInt($(this).val());
      }
    });
    $("#edadSeguroPersons").val(edadseguro);
    $("#popover-seguro").removeClass("show");
  });
  $("#btn-seguro").on("click", function (e) {
    $("#popover-seguro").addClass("show");
  });
  $("html").on("click", function () {
    $("#popover-seguro").removeClass("show");
  });
  $("#popover-seguro, #btn-seguro").on("click", function (e) {
    e.stopPropagation();
  });

})(jQuery);

let itemHabs;
function createItemHabs(param) {
  itemHabs = '<div id="hab' + param + '">' +
  "<p><strong>Habitación</strong></p>" +
  '<div class="content-adult' + param +'">' +
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
  '<div class="content-child' + param + '">' +
  "<span class='me-3'>Niños</span>" +
  "<div>" +
  '<button class="menos" onclick="menosInputEdad(' +
  param +
  ', this)">' +
  '<i class="fa fa-minus"></i>' +
  "</button>" +
  '<input type="number" id="child' +
  param +
  '" name="children[]" data="persons" class="cantidad" min="0" max="8" step="1" value="0" readonly">' +
  '<button class="mas" onclick="masInputEdad(' +
  param +
  ', this)">' +
  '<i class="fa fa-plus"></i>' +
  "</button>" +
  "</div>" +
  "</div>" +
  "<hr>" +
  "</div>";
}
let itemActs;
function createItemActs(param) {
  itemActs =
  '<div id="act' + param + '">' +
  '<div class="content-person' + param + '">' +
  '<span class="me-3">Edad ' + param + '</span>' +
  '<div>' +
  '<button class="menos">' +
  '<i class="fa fa-minus"></i>' +
  '</button>' +
  '<input type="number" id="person' + param + '" name="person' + param + '" data="edadact" class="cantidad" min="1" max="99" step="1" value="1">' +
  '<button class="mas">' +
  '<i class="fa fa-plus"></i>' +
  '</button>' +
  '</div>' +
  '</div>' +
  '</div>';
}
let itemSeguro;
function createItemSeguro(param) {
  itemSeguro =
  '<div id="seguro' + param + '">' +
  '<div class="content-person' + param + '">' +
  '<span class="me-3">Edad ' + param + '</span>' +
  '<div>' +
  '<button class="menos">' +
  '<i class="fa fa-minus"></i>' +
  '</button>' +
  '<input type="number" id="seguroperson' + param + '" name="seguroperson' + param + '" data="edadseguro" class="cantidad" min="1" max="99" step="1" value="1">' +
  '<button class="mas">' +
  '<i class="fa fa-plus"></i>' +
  '</button>' +
  '</div>' +
  '</div>' +
  '</div>';
}

jQuery(document).ready(function ($) {
  $(".dropdown-search-mobile .nav-link.active").each(function () {
    $("#dropdown-menu-search").html($(this).html());
  });

  $(".dropdown-search-mobile .nav-link").on("click", function () {
    $("#dropdown-menu-search").html($(this).html());
  });
});

const masInputEdad = (param, _this) => {
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
  let inputChild = jQuery(_this).siblings("input");
  let maxChild = parseInt(inputChild.attr("max"));
  let inputVal = parseInt(inputChild.val());

  if ((inputVal + 1) < (maxChild + 1)) {
    jQuery(_this).parent().parent().after(html);
  }
};

const menosInputEdad = (param, _this) => {
  if (jQuery(".content-age" + param).length > 0) {
    jQuery(".content-age" + param).last().remove();
  }
};

$('.cantidad').change(function() {
  let mincant = parseInt($(this).attr('min'));
  let maxcant = parseInt($(this).attr('max'));
  if (parseInt($(this).val()) < mincant) {
    $(this).val(mincant)
  } else if (parseInt($(this).val()) > maxcant) {
    $(this).val(maxcant)
  }
})