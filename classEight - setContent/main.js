$(document).ready(function() {
    $('#btnName').click(
        function() {
            $("#txtName").val("Ashraful Hasan Chowdhury");
        }
    );

    $('#btnDept').click(
        function() {
            $("#dept").text("physics");
        }
    );

    $('#btnSkill').click(
        function() {
            $("#skill").text("Flying");
        }
    );

});
