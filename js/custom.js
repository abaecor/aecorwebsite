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

$('#submit').click(function(){
		var nameReg = /^[a-zA-Z]+$/;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var name = $('#name').val();
		var email =  $('#email').val();
		cnt =1;
		if($('#name').val() == ''){
			$('#name').css('border','1px solid red');
			cnt = 0;
			return false;
		} else if($('#email').val() == ''){
			$('#email').css('border','1px solid red');
			cnt = 0;
			return false;
		}
		else{
			if($('#name').val() != ''){
				if(!nameReg.test(name)){
					$('#name').css('border','1px solid red');
					cnt = 0;
					return false;
				} else {
					$('#name').css('border','1px solid #D8D8D8');
				}	
			} else if($('#email').val() != ''){
				if(!emailReg.test(email)){
					$('#email').css('border','1px solid red');
					cnt = 0;
					return false;
				} else {
					$('#email').css('border','1px solid #D8D8D8');
				}
			}
		}
		if(cnt){
			data="name=" + name+ "&email=" + email+ "&subject="+ $('#subject').val()+ "&message=" + $('#message').val();
			alert(data);
				$.ajax({                   
				url: '/sendEmail.php',
				data: data,
				dataType: "html",
				type:'post',
				success:function(response){
					
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



