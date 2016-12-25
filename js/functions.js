/*==== active menu ====*/
$(document).ready(function () {
    
    $('.navbar .navbar-right.main-menu li a').on('click',function () {   
       $('.navbar .navbar-right.main-menu li .background-active').removeClass('button-active');
       $(this).addClass('background-active');
    }); 

    $('.carousel').carousel({
        interval: 1000 * 10
    });

    // dropdown hover 
    $(function () {
        $('li.dropdown a').click(function () {
            $('li.dropdown a.dropdown-toggle').css({
              backgroundColor: 'rgb(255,250,0)'  
            });
        });    
        $(".dropdown").hover(            
            function () {
                if ($(window).width() > 768 ) {
                    $('.dropdown-menu', this).stop(true, true).fadeToggle("fast");
            }
        });
    });

    //back-to-top
    var offset = 400;
    var duration = 300;

    $(window).scroll(function() {
        if($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        }
        else{
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {  
        $('html,body').animate({
            scrollTop: 0
        }, duration);    
        return false;
    });
    
});

/*==== upload dashboard ====*/
$(document).ready(function () {

    $('input').click(function () {

        var a = $(this).attr("name");
        console.log(a);

        $('input[name="'+a+'"]').change(function() {
            var fileName = $(this).val();
            $('span i[class="'+a+'"]').empty().append(fileName);
        })

    });
        
});