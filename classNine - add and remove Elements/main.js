$(document).ready(function() {
    $('#btnName').click(
        function() {
            $("#txtName").val($("#txtName").val()+" Hasan Chowdhury");
        }
    );

    $('#btnDept').click(
        function() {
            $("#dept").append("physics");
        }
    );

    $('#btnSkill').click(
        function() {
            $("#skill").append("singing");
        }
    );
// There is a prepend method which is used to add something behind the line
// there is also before and after method

$('#btnRemoveSkill').click(
    function() {
        $("#skill").remove();
    }
);



$('#btnEmpty').click(
    function() {
        $("#Content-box").remove();
    }
);

});
