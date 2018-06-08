$( document ).ready(function() {
    console.log( "ready!" );

    // Make current tab active
    $( '#navigation a' ).on( 'click', function() {
        $(this).parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 500);
    });

    window.onscroll = function() {fixedHeader()};

    // Get the header
    var header = document.getElementById("navigation");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    function fixedHeader() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});
