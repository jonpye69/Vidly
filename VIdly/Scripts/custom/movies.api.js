/// <reference path="bootstrapAlert.js" />
/// <reference path="../bootbox.js" />

$(function () {

    bootstrapAlert.init({
        selectors: {
            alert: ".js-alert",
            icon: ".js-icon",
            message: ".js-message"
        }
    });

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
                    return "<a href='/movies/edit/" + movie.id + "'>" + movie.name;
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
    $("#movies").on("click", ".js-delete", function () {
        var button = $(this);

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
                    $.ajax({
                        url: "/api/movies/" + button.data().movieId,
                        method: "DELETE",
                        success: function (result) {
                            if (result.success) {
                                table.row(button.parents("tr")).remove().draw();

                                bootstrapAlert.show('The movie <b>' +
                                        button.data().movieName +
                                        '</b> has successfully been deleted.',
                                        true);
                            }
                            else {
                                bootstrapAlert.show('The following error has occured: ' + result.message,
                                        false);
                            }
                        },
                        error: function (xhr) {
                            //console.log("readyState: " + xhr.readyState);
                            //console.log("responseText: " + xhr.responseText);
                            //console.log("status: " + xhr.status);
                            //console.log("text status: " + textStatus);
                            //console.log("error: " + err);
                            if (xhr.status === 404) {
                                bootstrapAlert.show('The record for ' + button.data().movieName + ' could not be located.',
                                       false);
                            }
                            table.destroy();
                            table.draw();
                        }

                    });
                }
            }
        });


    });

});