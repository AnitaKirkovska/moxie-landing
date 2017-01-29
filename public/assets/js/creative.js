$(document).ready(function () {
    
    var headerHeight = ('header').height;
    
     $(".scroll-to-idea").click(function () {
        $('html, body').animate({
            scrollTop: $("#idea").offset().top - 43
        }, 700);
    });
    
    $(".scroll-to-features").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top -43
        }, 700);
    });
    $(".scroll-to-projects").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 100
        }, 700);
    });
    $(".scroll-to-contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 43
        }, 700);
    });
    
    $(".scroll-to-home").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top - 150
        }, 700);
    });
    
    
    window.onload = function () {
     var input = document.getElementById("myinputbox").focus();
 }
    
    
  
    /* VALIDATION */

    /* VALIDATION */
    var inp = $('.main-input');
    var mainForm = $('.subscribe-form');


    function err(){
      $.each(inp, function(){
        if(!$.trim(this.value)){
          $(this).addClass('validation-error');
          // more stuff
        }else{
          $(this).removeClass('validation-error');
          // more stuff
        }  
     });  
    }


    function validateEmail(email) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return re.test(email);
    }



    mainForm.on('submit', function(e){

            e.preventDefault();

            var emailField = $('.field-email');

            emailField.removeClass('validation-error');

            if( !validateEmail(emailField.val()) ){

                e.preventDefault();
                emailField.addClass('validation-error');
            }

            err();
    });
    
    
    var body = $('body');
        
        var menuTrigger = $('.js-menu-trigger');
        var mainOverlay = $('.js-main-overlay');
  
        
        
        mainOverlay.on('click', function(){
            body.removeClass('menu-is-active');
        });
       
  
        menuTrigger.on('click', function(){
          body.addClass('menu-is-active');
        });
        
        
        menuTrigger.on('click', function(){

        $('.js-body').toggleClass('menu-is-visible'); // or addClass

        });
        
        
       $('.menu li a').on('click', function(){
       
        $("body").removeClass("menu-is-active");

        });
    
    
    
});