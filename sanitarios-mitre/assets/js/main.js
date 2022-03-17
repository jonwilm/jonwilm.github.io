$('.btn-logo').on('click', function () {
  let attrBtn = $(this).attr('btn')
  $('#logos2').html($('#' + attrBtn).html())
})

function onInput() {
  if ($('#text-search').val() == '') {
    $('#search').prop('disabled', true)
  } else {
    $('#search').prop('disabled', false)
  }
}
function onInputMobile() {
  if ($('#text-search-mobile').val() == '') {
    $('#search-mobile').prop('disabled', true)
  } else {
    $('#search-mobile').prop('disabled', false)
  }
}
function abrirNuevoTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
$('#search').click(function() {
  if ($('#text-search').val() != '') {
    let ruta = $('#text-search').val()
    let url = 'https://www.tiendasanitariosmitre.com.ar/' + ruta
    abrirNuevoTab(url)
  } else {
    alert('Ingresa lo que desea buscar')
  }
})
$('#search-mobile').click(function() {
  if ($('#text-search-mobile').val() != '') {
    let ruta = $('#text-search-mobile').val()
    let url = 'https://www.tiendasanitariosmitre.com.ar/' + ruta
    abrirNuevoTab(url)
  } else {
    alert('Ingresa lo que desea buscar')
  }
})