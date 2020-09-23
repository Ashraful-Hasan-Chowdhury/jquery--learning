$(document).ready(function() {
    $('#btnHide').click(
        function() {
            $("#txtLong").hide("slow");
        }
    );

    $('#btnShow').click(
        function() {
            $("#txtLong").show(1000);
        }
    );

    $('#btnToggle').click(
        function() {
            $("#txtLong").toggle(100);
        }
    );

    $('#btnFadeOut').click(
        function() {
            $("#txtLong").fadeOut(1000);
        }
    );

    $('#btnFadeIn').click(
        function() {
            $("#txtLong").fadeIn(1000);
        }
    );

    $('#btnFadeTo').click(
        function() {
            $("#txtLong").fadeTo(1000,.3);
        }
    );

    $('#btnFadeToggle').click(
        function() {
            $("#txtLong").fadeToggle(1000);
        }
    );

});
