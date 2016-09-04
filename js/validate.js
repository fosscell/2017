$('#ContactForm').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true
        },
//            answer: {
//                required: true,
//                answercheck: true
//            }
    },
    messages: {
        name: {
            required: "Please give your name.",
            minlength: "your name must consist of at least 2 characters"
        },
        email: {
            required: "no email, no message"
        },
        message: {
            required: "um...yea, you have to write something to send this form.",
            minlength: "thats all? really?"
        },
//            answer: {
//                required: "sorry, wrong answer!"
//            }
    },
    submitHandler: function(form) {
        $(form).ajaxSubmit({
            type:"POST",
            data: $(form).serialize(),
            url:"./lib/mail.php",
            success: function() {
                $('#ContactForm :input').attr('disabled', 'disabled');
                $('#ContactForm').fadeTo( "slow", 0.15, function() {
                    $(this).find(':input').attr('disabled', 'disabled');
                    $(this).find('label').css('cursor','default');
                    $('#success').fadeIn();
                });
            },
            error: function() {
                $('#ContactForm').fadeTo( "slow", 0.15, function() {
                    $('#error').fadeIn();
                });
            }
        });
    }
});
