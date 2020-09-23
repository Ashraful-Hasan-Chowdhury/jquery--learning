$(document).ready(function() {
    $('#btnStart').click(
        function() {
            $('#txt').css("background","yellow")
            .css("color","red")
            .slideUp(3000)
            .slideDown(3000);
        }
    );
});
