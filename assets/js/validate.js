$(document).ready(function(){
    $('#productForm').on('submit', function() {
        let launchDate = $('#launchDate').val();
        if(new Date() >= new Date(launchDate)){   
            $('.error').show();
            $('html, body').animate({
                scrollTop: ($('.error').offset().top - 300)
            }, 2000);
            return false;
        }
    });
});