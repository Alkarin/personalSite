$( document ).ready(function() {
    console.log( "ready!" );

    // Get the header
    var header = document.getElementById("navigation");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Make current tab active
    $( '#navigation a' ).on( 'click', function() {
        $(this).parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        // Check if on homepage, if not redirect
        redirectToHome.call(this);
        animateScroll.call(this);
    });

    // Initialized Header Location on load
    fixedHeader();
    window.onscroll = function() {fixedHeader()};


    // ########################################### FUNCTIONS ###########################################################

    function fixedHeader() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    function redirectToHome() {
        if(location.pathname != "/") {
            console.log("Here");
            window.location.replace("/" +  $.attr(this, 'href'));
        }
    }

    function animateScroll(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 500);

        setUrlParam.call(this);
    }

    function setUrlParam() {
        window.location.href = $.attr(this, 'href');
    }


    var Line = new ProgressBar.Line('#bar-css', {
        color: '#FCB03C',
        trailColor: '#f4f4f4',
        strokeWidth: 1,
        trailWidth: 1,
        duration: 2000,
        easing: 'easeInOut',
    });

    Line.animate(.5);

});
