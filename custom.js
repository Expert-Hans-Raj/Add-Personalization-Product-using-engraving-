

$(document).on('click','.personalization_btn button',function(e){
  	e.preventDefault();
   $(".personalization_content").slideToggle();
  
  var status = $('#personalization_status').val();
  
  status == 0 ? $('#personalization_status').val(1) : $('#personalization_status').val(0);

});

$(document).ready(function(){
  var monogram_length = $('.template-cart .cart__meta-text.monogram_item').length;
  
  var charge_product = $('.template-cart .cart__row.personalize_charge .cart__qty-input').val();
  var charge_product_length = $('.template-cart .cart__row.personalize_charge').length;

  if(monogram_length != 0)
  {
    var total = 0;
    $('.template-cart .cart__meta-text.monogram_item').each(function( index ) {
      var value = $(this).parents('.cart__row').find('.cart__qty-input').val();
      value = parseInt(value);
      total = total+value;
    });
    
    if(total != charge_product )
    {
      var loc = $('.template-cart .cart__row.personalize_charge').find('.list-view-item__title').data('line');
      loc = parseInt(loc);
      window.location.replace('/cart/change?line='+loc+'&quantity='+total);
    }
  }

  if(monogram_length == 0 && charge_product_length != 0)
  {
    var loc1 = $('.template-cart .cart__row.personalize_charge').find('.cart__remove').attr('href');
    window.location.replace(loc1);
  }

  $('.style-chart-open-popup').magnificPopup({
    type:'inline',
    midClick: true,
    closeBtnInside:true,
    showCloseBtn:true
  });
  
  
  $(document).on('change keyup ','.simple_product .cart__qty-input',function(){
    
    $('input.cart__update').click();

  });
  
  
});
