    document.getElementById('get_date').valueAsDate = new Date(new Date().setDate(new Date().getDate() + 1))

    function setTime() {
        date_future = new Date(document.querySelector("#get_date").value);
        date_now = new Date()
        offset = new Date().getTimezoneOffset() * 60000

        seconds = Math.floor((date_future - (date_now) + (offset)) / 1000);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        document.querySelector("#days span").innerHTML = '<div>' + days + '</div>'
        document.querySelector("#hours span").innerHTML = '<div>' + hours + '</div>'
        document.querySelector("#minutes span").innerHTML = '<div>' + minutes + '</div>'
        document.querySelector("#seconds span").innerHTML = '<div>' + seconds + '</div>'
    }

    function getTime() {
        if (calcNewYear) {
            clearInterval(calcNewYear)
        }
        var calcNewYear = setInterval(setTime, 1000);
    }
    setTime()
    getTime()

    $(document).ready(function() {

        $(".hamburger").click(function() {
            $(this).toggleClass("is-active");
            $('.pow-header-links').toggleClass("active");
        });



        $(".pow-student-thumbnail-video-link").click(function(e) {
            e.preventDefault();
            $('.pow-student-thumbnail-video-link').removeClass('active');
            $(this).addClass('active');
            var href = $(this).attr('href');
            console.log(href);
            if ($('.pow-student-thumbnail-video-link').hasClass('active')) {

                $("#student-review-1-review>source").attr('src', href)
                $("#student-review-1-review>source").load();
                $("#student-review-1-review>source").play();
            }
        })

        $('.pow-acco-btn').click(function() {
            $('.pow-acco-btn').removeClass('add');
            $(this).toggleClass('add');
            // if ($'.pow-acco-btn').hasClass('collapsed'){
            //     $(this).remoClass('add');
            // }
        })

        $('.pow-slick-slider-container').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 4,
            dots: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.pow-hero-right-play').click(function() {
            $('#background-video').trigger('play');
            $('#background-video').addClass('played')
                // $('#background-video').trigger('pause');
                // $('#background-video').attr('autoplay', 'true')
        })

        // if ($('.homepage-video').hasClass('played')) {
        //     $('.pow-hero-right-play').click(function() {
        //         // $('#background-video').trigger('pause');
        //         alert('hi');
        //     })
        // }

    });