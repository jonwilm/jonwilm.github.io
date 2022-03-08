$('.btn-logo').on('click', function () {
  let attrBtn = $(this).attr('btn')
  $('#logos2').html($('#' + attrBtn).html())
})