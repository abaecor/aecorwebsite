$(function() {
    // These first three lines of code compensate for Javascript being turned on and off. 
    // It simply changes the submit input field from a type of "submit" to a type of "button".
    var cnt = 1 ;
    var paraTag = $('input#submit').parent('p');
	
    $(paraTag).children('input').remove();
    $(paraTag).append('<input type="button" name="submit" id="submit" value="Email us" />');

    $('#main input#submit').click(function() {
    	alert('here1');
        var name = $.trim($('input#name').val());
        alert('here2');
        var email = $.trim($('input#email').val());
        alert('here3');
        var message = $.trim($('textarea#message').val());
        alert('here4');
		var mailpattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		alert('here5');
		var subject = $.trim($('input#subject').val());
		alert('here6');
		var error = false;
		
		 if(name=='')
		 {
			 $('[name="name"]').addClass('vaidate_error');
			 $('#contact_form .name').show();
			 error = (error && true);
		 }else{
			 $('[name="name"]').removeClass('vaidate_error');
			 $('#contact_form .name').hide();
		}
			 
		if(email=='')
		{
			 $('[name="email"]').addClass('vaidate_error');
			 $('#contact_form .email').show();
			 error = (error && true);
		}else{
			if (!mailpattern.test(email)) {
				 $('[name="email"]').addClass('vaidate_error');
				 $('#contact_form .email').show();
				 error = (error && true);
			}else{
				 $('[name="email"]').removeClass('vaidate_error');
				 $('#contact_form .email').hide();
			}
		}
			 
				 
		if(message=="")
		{
			 $('[name="message"]').addClass('vaidate_error');
			 $('#contact_form .message').show();
			 error = (error && true);
		}else{
			 $('[name="message"]').removeClass('vaidate_error');
			 $('#contact_form .message').hide();
		}
		if(subject=="")
		{
			 $('[name="subject"]').addClass('vaidate_error');
			 $('#contact_form .subject').show();
			 error = (error && true);
		}else{
			 $('[name="subject"]').removeClass('vaidate_error');
			 $('#contact_form .subject').hide();
		}
		if(error){
			return false;
		}
        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email +'&subject='+ subject +'&message=' + message,

            success: function(results) {	
                $('div#response').html(results).css('display', 'block');		
   
            }
        }); // end ajax
    });
});
		