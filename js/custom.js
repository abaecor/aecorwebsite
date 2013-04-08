jQuery.fn.reset = function () {
  $(this).each (function() { this.reset(); });
}
//Portfolio Isotope Document
jQuery(document).ready(function(){
	$('#sub_nav a').each(function(){
	    $(this).bind('click',function(){
	        var link = $(this).attr('href');
	        $('header nav a[href*="'+link+'"]').trigger('click');
	    });
	});	
$("<select />").appendTo("nav");

	jQuery("<option />", {
	"selected": "selected",
	"value"   : "",
	"text"    : "Go to..."
	}).appendTo("nav select");

	jQuery("nav li a").each(function() {
	var el = jQuery(this);
	jQuery("<option />", {
	"value"   : el.attr("href"),
	"text"    : el.text()
	}).appendTo("nav select");
	});

	jQuery("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
	});
jQuery(function(){

var jQuerycontainer = jQuery('.portfolio_container');

jQuerycontainer.isotope({
itemSelector : '.element'
});


var jQueryoptionSets = jQuery('#options .option-set'),
jQueryoptionLinks = jQueryoptionSets.find('a');

jQueryoptionLinks.click(function(){
var jQuerythis = jQuery(this);

if ( jQuerythis.hasClass('selected') ) {
return false;
}
var jQueryoptionSet = jQuerythis.parents('.option-set');
jQueryoptionSet.find('.selected').removeClass('selected');
jQuerythis.addClass('selected');


var options = {},
key = jQueryoptionSet.attr('data-option-key'),
value = jQuerythis.attr('data-option-value');

value = value === 'false' ? false : value;
options[ key ] = value;
if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {

changeLayoutMode( jQuerythis, options )
} else {

jQuerycontainer.isotope( options );
}

return false;
});


});


function checkVal(field,pattern){
	var error;
	var fieldVal = $.trim($('#'+field).val());
	if(fieldVal==''){
		error = true;
	}
	if(typeof pattern!='undefined'){
		if(!pattern.test(fieldVal)){
			error = true;
		}
	}
	if(error){
		$('#'+field).css('border','1px solid red');
		$('#contact_form .'+field).show();
		return false;
	}else{
		$('#'+field).css('border','1px solid #D8D8D8');
		$('#contact_form .'+field).hide();
		return true;
	}
	
}
$('#submit').click(function(){
		var nameReg = /^[a-zA-Z]+$/;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var name = checkVal('name',nameReg);
		var email =  checkVal('email',emailReg);
		var subject = checkVal('subject');
		var message = checkVal('message');
		var captcha = checkVal('6_letters_code');
		var noerror = true;
		
		noerror = (noerror && name);
		noerror = (noerror && email);
		noerror = (noerror && subject);
		noerror = (noerror && message);
		if(noerror){
			 	name = $.trim($('#name').val());
				email =  $.trim($('#email').val());
				subject = $.trim($('#subject').val());
				message = $.trim($('#message').val());
				
				data="name=" + name+ "&email=" + email+ "&subject="+ $('#subject').val()+ "&message=" + $('#message').val()+ "&captcha=" + $('#6_letters_code').val();
				$.ajax({                   
				url: 'sendEmail.php',
				data: data,
				dataType: "html",
				type:'post',
				success:function(response){
					if(response == 'wrong_captcha'){
						$('#6_letters_code').css('border','1px solid red');
						$('.6_letters_code').show();
					} else if(response == 'failure') {
						alert('There was some problem sending your email. Please try again.');
					}else{
						alert('Your mail has been sent successfully.');
						$('#6_letters_code').css('border','1px solid #D8D8D8');
						$('#contact_form').reset();
						refreshCaptcha();
					}
				},
				error:function(response){
					
				}
				
			});
		} 
		
});

});



//Portfolio Image Hover
jQuery(document).ready(function(){
jQuery(this).find('.portfolio_link').stop().css("display","none");			 
jQuery(".portfolio_img").hover(function() {
jQuery(this).find('img').stop().animate({opacity: "0.3"}, 'fast');
jQuery(this).find('.portfolio_link').stop().css("display","block");
jQuery(this).find('.portfolio_link a img').stop().animate({opacity: "1"}, 'fast');

},
function() {
jQuery(this).find('.portfolio_link').stop().css("display","none");
jQuery(this).find('img').stop().animate({opacity: "1"}, 'fast');
});
});


// Nav Document
jQuery(document).ready(function() {
	jQuery('nav').onePageNav({
	begin: function() {
	console.log('start')
	},
	end: function() {
	console.log('stop')
	}
	});
	jQuery("a.example7").fancybox({
	'titlePosition'	: 'inside'
	});
});



