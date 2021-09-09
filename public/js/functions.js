function allFuncs(){
    (function ($) {
        "use strict";

        $("#menu-id").on("click", 'a', function () {
            $("#menu-id").modal('toggle');
        });
    
        // catagory-container swiper slider init
        // var catagoryContainer2 = new Swiper('.category-container2', {
        //     slidesPerView: 6,
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: false,
        //     },
        //     loop: true,
        //     navigation: {
        //         nextEl: '.catagory-slider-next',
        //         prevEl: '.catagory-slider-prev',
        //       },
        //     spaceBetween: 30,
        //     breakpoints: {
        //         1300: {
        //             slidesPerView: 4
        //         },
        //         768: {
        //             slidesPerView: 3
        //         },
        //         540: {
        //             slidesPerView: 2
        //         },
        //         400: {
        //             slidesPerView: 2
        //         }
        //     }
        // });
        
        $('.info-hover-effect-parent').on('mouseover', '.info-hover-effect-child', function() {
            $('.info-hover-effect-child.active').removeClass('active');
            $(this).addClass('active');
        });
        
        
        // $('.add-product img').elevateZoom({
        //     zoomType: "inner",
        //     scrollZoom : true
        // });
    
        // $('.cart-btn-toggle').on('click', function(){
        //     $(this).closest('.cart-btn-toggle').find('.cart-btn').hide()
        //     $(this).closest('.cart-btn-toggle').find('.price-btn').show()
        // })
        // $('.cart-btn').on('click', function(){
        //     $(this).parent('.cart-btn-toggle').find('.cart-btn').hide()
        //     $(this).parent('.cart-btn-toggle').find('.price-btn').show()
        // })
        // $('.price-increase-decrese-group .quantity-right-plus').on('click', function() {
        //     var $qty = $(this).closest('.price-increase-decrese-group').find('.input-number');
        //     var currentVal = parseInt($qty.val(), 10);
        //     if (!isNaN(currentVal)) {
        //         $qty.val(currentVal + 1);
        //     }
        // });
        // $('.price-increase-decrese-group .quantity-left-minus').on('click', function() {
        //     var ths = $(this);
        //     var $qty = $(this).closest('.price-increase-decrese-group').find('.input-number');
        //     var currentVal = parseInt($qty.val(), 10);
        //     if (!isNaN(currentVal) && currentVal > 0) {
        //         $qty.val(currentVal - 1);
        //     }
        //     if(currentVal === 1){
        //         console.log(ths);
        //         // ths.parents('.price-increase-decrese-group').css('background-color','red');
        //         ths.parents('.price-btn').hide();
        //         ths.parents('.price-btn').siblings('.cart-btn').show();
        //     }
        // });
    
        
        // var $qty = $(this).closest('.price-increase-decrese-group').find('.input-number');
        // var currentVal = $qty.val();
        // if(currentVal === 0){
        //     alert('hi')
        //     // $(this).closest('.cart-btn-toggle').find('.cart-btn').show()
        //     $(this).closest('.cart-btn-toggle').find('.price-btn').hide()
        // }
    
        $(".wish-link").on("click",function(e){
            e.preventDefault();
            $(this).toggleClass("focus");
            // $("p").toggleClass("main");
        });
    
        $(".all-catagory-option > a").on("click",function(e){
            e.preventDefault();
            $('.page-layout').toggleClass('open-side-menu')
            $('body').toggleClass('open-side-menu')
            // $(this).toggleClass('open-bar')
        });
        var contentwidth = jQuery(window).width();
        // if ((contentwidth) > '1200') {
        //     $('.home-layout').addClass('open-side-menu')
        // }
        // if ((contentwidth) > '1200') {
        //     $('.sticky-sidebar-home').addClass('open-side-menu')
        // }
        if ((contentwidth) < '991') {
            $('.widget .widget-wrapper').addClass('collapse')
            $('.widget-callapse').addClass('collapse')
        }
    
        if ((contentwidth) < '991') {
            $('.cart-btn-toggle').removeAttr('onclick');
        }
    
        $('.wishlist-item>.close-item').on('click',function(){
            $(this).parent('.wishlist-item').remove();
        })
        
    
         // fixed menu app home page
         $(window).on("scroll",function() {
            var scroll = $(window).scrollTop();
    
            if (scroll >= 100) {
                $(".header-bottom,.mobile-header,.catagory-sidebar-area").addClass("fixed-totop animated slideInDown");
            } else {
                $(".header-bottom,.mobile-header,.catagory-sidebar-area").removeClass("fixed-totop  animated slideInDown");
            }
        });
    
    
         // fixed bottom to top
        $(window).on("scroll",function() {
            var scroll = $(window).scrollTop();
    
            if (scroll >= 500) {
                $(".to-top").addClass("fixed-totopmbb");
            } else {
                $(".to-top").removeClass("fixed-totopmbb");
            }
        });
    
    
        if($(window).width() > 990) {
            $(document).ready(function() {
                $('.sidebar')
                    .theiaStickySidebar({
                        additionalMarginTop: 110
                    });
            });
        }
    
    
    
    
        // $(function () {
        //     setNavigation();
        // });
        
        // function setNavigation() {
        //     var pathArray = window.location.pathname.split('/');
        //     var lastItem = pathArray.pop();
        //     $(".menu a").each(function () {
        //         var href = $(this).attr('href');
        //         if (lastItem.substring(0, href.length) === href) {
        //             var myLi = $(this).closest('li');
        //             myLi.addClass('active');
        //             myLi.parent().parent().addClass('active');
        //         }
        //     });
        // }
    
    
    
        // $('.view').on('click',function(){
        //     if ($(this).text() == "View More") { 
        //         $(this).text("Show Less"); 
        //         $(this).parents('.order-card').addClass("show")
        //     } else { 
        //         $(this).text("Show More"); 
        //         $(this).parents('.order-card').removeClass("show")
        //     }; 
        // });
    
        $('.view').on('click',function(){
            // $(this).text("Show Less"); 
            $(this).parents('.order-card').addClass("show")
        });
        $('.show-less').on('click',function(){
            // $(this).text("Show Less"); 
            $(this).parents('.order-card').removeClass("show")
        });
    
    
    
        $(".right-nav-menu-toggle").on("click",function(e){
            $('.right-nav-menu').toggleClass('open');
        });
    
            
        
    })(jQuery);	
    
    
    // jQuery(function($){
    //     $(document).ajaxSend(function() {
    //         $("#overlay").fadeIn(300);　
    //     });
            
    //     $('#edit').click(function(){
    //         $.ajax({
    //             type: 'GET',
    //             success: function(){
    //                 $("#load-data").load("../components/edit-profile.html", function(responseTxt, statusTxt, xhr){
    //                     if(statusTxt == "success")
    //                       alert("External content loaded successfully!");
    //                     if(statusTxt == "error")
    //                       alert("Error: " + xhr.status + ": " + xhr.statusText);
    //                   });
    //             }
    //         }).done(function() {
    //             setTimeout(function(){
    //                 $("#overlay").fadeOut(300);
    //             },500);
    //         });
    //     });	
    // });
    
    
    $(document).ready(function(){
    
    $("input[type='radio']").click(function(){
        var sim = $("input[type='radio']:checked").val();
        //alert(sim);
        if (sim<3) { $('.myratings').css('color','red'); $(".myratings").text(sim); }
        else{ $('.myratings').css('color','green'); $(".myratings").text(sim); } 
        }); 
    });
}