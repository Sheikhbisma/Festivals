$(document).ready(function(){
    $('.btn').click(function(e){
        e.preventDefault();
        let user = $('.user').val();
        let num = $('.num').val();
        let email = $('.email').val();
        let text = $('.textarea').val();

        if(user == '' || num=='' || email=='' || text==''){
            alert('Fill Your All Fields');
        }
        else{
            alert('Form Submitted');
            $('.user').val('');
            $('.num').val('');
            $('.email').val('');
            $('.textarea').val('');
            
            // Save the original form HTML
            let originalContent = $('.form').html();
            
            // Show thank you message
            $('.form').html('<h1 class="thank">Thank you for visiting our website!</h1>');

            // After 2 seconds, bring back the original content
            setTimeout(function(){
                $('.form').html(originalContent);
            }, 2000);
        }
    });
});
