jQuery('document').ready(function(){

jQuery("input").on('keyup', function(){

var a, b, c;

a = jQuery('#val1').val();
b = jQuery('#val2').val();

a = parseInt(a);
b = parseInt(b);

c = a+b;

jQuery('#res').html(c);

})

})