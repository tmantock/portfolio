var set = false;

// Preloader

  $(window).load(function(){
        $('.loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350);

    });

// Global document ready function

jQuery(document).ready(function($) {
     // "use strict";
    //check if background-images have been loaded and show single pages
    $('.single-page').bgLoaded({
        afterLoaded: function() {
            showCaption($('.page-container .single-page').eq(0));
        }
    });

    //open page
    $('.single-page').on('click', function() {
        var selectedProject = $(this),
            toggle = !selectedProject.hasClass('is-full-width');
        if (toggle) toggleProject($(this), $('.page-container'), toggle);

    });

    //close page
    $('.page-container .page-close').on('click', function() {
        toggleProject($('.is-full-width'), $('.page-container'), false);
        set = false;
    });

    //scroll to page info
    $('.page-container .page-scroll').on('click', function() {
        $('.page-container').animate({
            'scrollTop': $(window).height()
        }, 500);
    });

    //update title and .page-scroll opacity while scrolling
    $('.page-container').on('scroll', function() {
        window.requestAnimationFrame(changeOpacity);
        viewVisible($('.fun-facts'));
    });

    function toggleProject(project, container, bool) {
        if (bool) {
            //expand page
            container.addClass('project-is-open');
            project.addClass('is-full-width').siblings('.single-page').removeClass('is-loaded');
        } else {
            //check media query
            var mq = window.getComputedStyle(document.querySelector('.page-container'), '::before').getPropertyValue('content'),
                delay = (mq == 'mobile') ? 100 : 0;

            container.removeClass('project-is-open');
            //fade out page
            project.animate({
                opacity: 0
            }, 800, function() {
                project.removeClass('is-loaded');
                $('.page-container').find('.page-scroll').attr('style', '');
                setTimeout(function() {
                    project.attr('style', '').removeClass('is-full-width').find('.page-title').attr('style', '');
                }, delay);
                setTimeout(function() {
                    showCaption($('.page-container .single-page').eq(0));
                }, 300);
            });
        }
    }

    function changeOpacity() {
        var newOpacity = 1 - ($('.page-container').scrollTop()) / 300;
        $('.page-container .page-scroll').css('opacity', newOpacity);
        $('.is-full-width .page-title').css('opacity', newOpacity);
    }

    function showCaption(project) {
        if (project.length > 0) {
            setTimeout(function() {
                project.addClass('is-loaded');
                showCaption(project.next());
            }, 150);
        }
    }

    // Magnific Popup

    $('.open-portfolio').magnificPopup({
        type: 'inline',
        midClick: true,
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out' // CSS transition easing function
        }
    });


    // Mixitup Filter

    $(function notStrict() {
        // Instantiate MixItUp:
        $('#portfolio').mixItUp();
    });


    // Testimonial Slider

    $("#testimonial-slides").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // Mail to click handler

    $(".hire-me").on('click',function () {
       window.location.href = "mailto:tmantock@gmail.com";
    })

    // Skills Chart

    var options = {
        //segmentShowStroke: false,
        percentageInnerCutout: 70,
        //animation: true,
        animationEasing: 'easeOutQuint',
        //animateRotate: false,
        animateScale: true
    };
    var data = {
        html_css: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        bootstrap: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        js_jquery: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        angular: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        php: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        python: [{
            value: 75,
            color: "#404148"
        }, {
            value: 25,
            color: "#fff"
        }],
        go: [{
            value: 75,
            color: "#404148"
        }, {
            value: 25,
            color: "#fff"
        }],
        c: [{
            value: 65,
            color: "#404148"
        }, {
            value: 35,
            color: "#fff"
        }],
        node: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        sass: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        tools: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }],
        github: [{
            value: 95,
            color: "#404148"
        }, {
            value: 5,
            color: "#fff"
        }]
    };

    var offset = 0;
    $.each(data, function(key, data) {
        var canvas = document.querySelector('#' + key);
        if (canvas) {
            offset += 250;
            setTimeout(function() {
                var ctx = canvas.getContext('2d');
                var chart = new Chart(ctx);
                chart.Doughnut(data, options);
            }, offset);
        }
    });


    // Google Map


    // main directions
    map = new GMaps({
        position: "TOP_CENTER",
        el: '#map',
        lat: 33.6839,
        lng: -117.7947,
        zoom: 12,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        scrollwheel: false
    });
    // add address markers
    map.addMarker({
        lat: 33.6839,
        lng: -117.7947,
        title: 'Here I Am',
        infoWindow: {
            content: '<p> Irvine, California</p>'
        }
    });


    // Contact Form

    $('form#contactForm button.submit').click(function() {

        $('#image-loader').fadeIn();

        var contactName = $('#contactForm #contactName').val();
        var contactSubject = $("#contactSubject").val();
        var contactEmail = $('#contactForm #contactEmail').val();
        var contactMessage = $('#contactForm #contactMessage').val();

        var data = 'contactName=' + contactName + '&contactSubject=' + contactSubject + '&contactEmail=' + contactEmail + '&contactMessage=' + contactMessage;

        $.ajax({

            type: "POST",
            url: "inc/mail_handler.php",
            data: data,
            success: function(msg) {

                // Message was sent
                if (msg == 'OK') {
                    $('#image-loader').fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                // There was an error
                else {
                    $('#image-loader').fadeOut();
                    $('#message-warning').html(msg);
                    $('#message-warning').fadeIn();
                }

            }

        });
        return false;
    });

    // Contact form end


});

/*
 * BG Loaded
 * Copyright (c) 2014 Jonathan Catmull
 * Licensed under the MIT license.
 */
(function($) {
    $.fn.bgLoaded = function(custom) {
        var self = this;

        // Default plugin settings
        var defaults = {
            afterLoaded: function() {
                this.addClass('bg-loaded');
            }
        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);

        // Loop through element
        self.each(function() {
            var $this = $(this),
                bgImgs = window.getComputedStyle($this.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
            $this.data('loaded-count', 0);
            $.each(bgImgs, function(key, value) {
                var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                $('<img/>').attr('src', img).load(function() {
                    $(this).remove(); // prevent memory leaks
                    $this.data('loaded-count', $this.data('loaded-count') + 1);
                    if ($this.data('loaded-count') >= bgImgs.length) {
                        settings.afterLoaded.call($this);
                    }
                });
            });

        });
    };
})(jQuery);

//function for incrementing a number value over time
function timeAdd(element, start,stop){
  if(typeof(start)!=='number' && typeof(stop)!=='number' || start === stop){
    return;
  }
  start++;
  element.text(start);
  setTimeout(function(){timeAdd(element, start,stop);}, 25);
}

//function for determining if a element is in view
function viewVisible(element){
  var windowHeight = $(window).height();
  var windowTop = $(window).scrollTop() + (windowHeight * .10);
  var windowBottom = (windowHeight - windowTop) - (windowHeight * .10);
  var targetElement = element.offset().top;
  var coffee = coffeeDrinks();
  var coding = codingHours();

  if(targetElement < windowBottom && targetElement > windowTop && set === false){
    timeAdd($('.coffee-drink'), coffee - 100, coffee);
    timeAdd($('.hours-code'), coding - 100, coding);
    set = true;
  }
  // else{
  //   $('.hours-code').text('0');
  //   $('.coffee-drink').text('0');
  // }
}

//function for determing the amount coffee drunken since March
function coffeeDrinks(){
  var coffee = 2;
  var d = new Date();
  var today = d.getTime();
  var startDate = Date.parse("3/15/16");
  var msecSince = today - startDate;
  var daysSince = (msecSince /(1000*60*60*24));
  var coffeeDrunk = Math.round(daysSince * coffee);
  return parseInt(coffeeDrunk);
}

//function for determining the amount hours spent coding
function codingHours(){
  var hours = 12;
  var d = new Date();
  var today = d.getTime();
  var startDate = Date.parse("3/15/16");
  var msecSince = today - startDate;
  var daysSince = (msecSince /(1000*60*60*24));
  var codingHours = Math.round((hours * daysSince));
  return parseInt(codingHours);
}
