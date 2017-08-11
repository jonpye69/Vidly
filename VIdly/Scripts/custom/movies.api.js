/// <reference path="bootstrapAlert.js" />
/// <reference path="../bootbox.js" />
/// <reference path="~/Scripts/DataTables/jquery.dataTables.js" />

bootstrapAlert.init({
    selectors: {
        alert: ".js-alert",
        icon: ".js-icon",
        message: ".js-message"
    }
});

$(function () {

    // Bind the movies
    var table = $("#movies").DataTable(
    {
        ajax: {
            url: "/api/movies",
            dataSrc: ""
        },
        "language": {
            "emptyTable": "No Movies available in table"
        },
        columns: [
            {
                data: "name",
                render: function (data, type, movie) {
                    return "<a href='/movies/edit/" + movie.id + "'>" + movie.name + "</a>";
                }
            },
            {
                data: "genre.name"
            },
            {
                data: "id",
                render: function (data, type, movie) {
                    return "<button class='btn btn-sm btn-warning js-delete' data-movie-id=" + data + " data-movie-name='" + movie.name + "'><span class='glyphicon glyphicon-minus-sign'></span> Delete</button>";
                }
            }
        ]
    });

    // Delete a movie
    $("#movies").on("click", ".js-delete", function (e) {

        var button = $(this);
        e.preventDefault();

        bootbox.confirm({
            message: "Are you sure you wish to delete movie <b>" + button.data().movieName + "</b>?",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok-circle"></span> Ok',
                    className: 'btn-primary'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove-circle"></span> Cancel',
                    className: 'btn-default'
                }
            },
            callback: function (result) {
                if (result) {
                    deleteMovie(button);
                }
            }
        });

    });

    // Actually delete the movie
    function deleteMovie(button) {

        $.ajax({
            url: "/api/movies/" + button.data().movieId,
            type: "DELETE",
            success: function () {
                table.row(button.parents("tr")).remove().draw();

                bootstrapAlert.show('The movie <b>' +
                        button.data().movieName +
                        '</b> has successfully been deleted.',
                        true);
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    table.row(button.parents("tr")).remove().draw();
                    bootstrapAlert.show('The record for ' + button.data().movieName + ' could not be located.',
                           false);
                }

            }

        });
    }

});