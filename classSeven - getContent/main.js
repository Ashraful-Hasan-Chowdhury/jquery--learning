$(document).ready(function() {
    $('#btnShow').click(
        function() {
            alert("The text is : "+$('#txt').text());
        }
    );

    $('#btnSource').click(
        function() {
            alert("The text is : "+$('#txt').html());
        }
    );

    $('#btnMail').click(
        function() {
            alert("The mail is : "+$('#txtMail').val());
        }
    );

});
