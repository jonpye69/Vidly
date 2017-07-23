$(function () {

    var table = $("#movies").DataTable(
    {
        ajax: {
            url: "/api/movies",
            dataSrc: ""
        },
        columns: [
            {
                data: "name",
                render: function (data, type, movie) {
                    return "<a href='/movies/edit/" + movie.id + "'>" + movie.name;
                }
            },
            {
                data: "genre.name"
            },
            {
                data: "id",
                render: function (data, type, movie) {
                    return "<button class='btn btn-sm btn-warning js-delete' data-movie-id=" + data + " data-movie-name='" + movie.name + "'>Delete</button>";
                }
            }
        ]
    });

    $("#movies").on("click", ".js-delete", function () {
        var button = $(this);

        bootbox.confirm("Are you sure you wish to delete movie <b>" + button.data().movieName + "</b>?", function (result) {
            if (result) {
                $.ajax({
                    url: "/api/movies/" + button.data().movieId,
                    method: "DELETE",
                    success: function () {
                        console.log("success");
                        table.row(button.parents("tr")).remove().draw();
                    }
                });
            }
        });

    });

});