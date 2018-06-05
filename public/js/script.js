$( document ).ready(function() {
    console.log( "ready!" );




    // Make current tab active
    $( '#navigation a' ).on( 'click', function() {
        $(this).parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Condense these into 1 method, using 'this'?
    $("#nav-resume").on("click", function(){
        toggleContent();
        $("#resume").removeClass('hide-content');
        $("#resume").addClass('show-content');
    });

    $("#nav-contact").on("click", function(){
        toggleContent();
        $("#contact").removeClass('hide-content');
        $("#contact").addClass('show-content');
    });

    $("#nav-home").on("click", function(){
        toggleContent();
        $("#home").removeClass('hide-content');
        $("#home").addClass('show-content');
    });

    function toggleContent() {
        $(".show-content").removeClass('show-content').addClass('hide-content');
        // Initiate Scroll
        $("html, body").delay(1000).animate({scrollTop:$('#main').offset().top - 40}, 2000);
    }


});
