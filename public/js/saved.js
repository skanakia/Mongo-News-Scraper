$(document).ready(function () {


    $(".delete").on("click", function () {
        $(this).attr("data-id");
        $.ajax({
            url: "/articles/delete/" + $(this).data("id"),
            method: "POST"
        }).done(function (data) {
            window.location = "/saved"
        })
    });


    $(".saveNote").on("click", function () {
        var thisId = $(this).attr("data-id");
        if (!$("#noteText" + thisId).val()) {
            alert("please enter a note to save")
        } else {
            $.ajax({
                url: "/notes/save/" + thisId,
                method: "POST",
                data: {
                    text: $("#noteText" + thisId).val()
                }
            }).done(function (data) {
                console.log(data);
                $("#noteText" + thisId).val("");
                $(".modalNote").modal("hide");
                window.location = "/saved"
            });
        }
    });

    $(".deleteNote").on("click", function () {
        var noteId = $(this).attr("data-note-id");
        var articleId = $(this).attr("data-article-id");
        $.ajax({
            url: "/notes/delete/" + noteId + "/" + articleId,
            method: "DELETE"

        }).done(function (data) {
            console.log(data)
            $(".modalNote").modal("hide");
            window.location = "/saved"
        })
    });

});

