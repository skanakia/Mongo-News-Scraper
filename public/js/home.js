$(document).ready(function() {

    $(".scrape").on("click", function() {

        $.ajax({
            url: "/scrape",
            method: "GET"
        }).then(function(err, res){
            if (err) {throw err}
            console.log(res);
            window.location = "/";
        });
    });

    $(document).on("click", ".save", function() {
        $.ajax({
            url: "/articles/save/" + $(this).data("id"),
            method: "POST"
        }).then(function(err, res) {
            if (err) {throw err}
            else {
                console.log(res);
                window.location = "/";
            }
        });

    });

});