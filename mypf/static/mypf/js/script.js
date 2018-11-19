$(document).ready(function () {

//    On click of the submit button call the function to generate new Be like Bill
    $(".btn-sub").click(function(){
        generate_belike();
    });

//    Function responsible for gettin user input values and refreshing the page content with updated content.
    function generate_belike() {

        var name = $('#name').val();
        var gender = $("#gender").val();
        console.log(name);
        csrf = $('input[name="csrfmiddlewaretoken"]').val()

        $.ajax({
             url : "http://127.0.0.1:8000/",
             type: "POST",
             dataType: "json",
             data: {
                'name':name,
                'gender':gender,
                'csrfmiddlewaretoken':csrf
             },
             success : function (data) {
                url = 'https://belikebill.ga/billgen-API.php?default=1&name='+data.name+'&sex='+data.gender ;
                console.log(url);
                $("#srcapi").attr('src',url);

                      }
             });
    };

//    to add active class on nav items
    var path = location.pathname.split("/")[1];
    //    console.log(path)
    if(path != ""){
        $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    }else{
        $('nav a[href="/"').addClass('active');
    }

});
