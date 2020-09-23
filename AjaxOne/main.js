$(document).ready(function() {
    // $('#btnName').click(
    //     function() {
    //         $("#txtName").val($("#txtName").val()+" Hasan Chowdhury");
    //     }
    // );
    fetchData();
});

function fetchData(){
    $.ajax({
        url: "data.xml",
        dataType: "xml",
        success: function(data){
            $("#list").children().remove();
            $("data").find("employee").each(function(){
                var alldata = '<li> Name: '+ $(this).find("name").text() + '</li>';
                $("#list").append(alldata);
            });
        },
        error: function(){
            $("#list").append("Error");
        }
    });
}
