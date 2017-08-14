$(function() {

    // Bind the movies
    var table = $("#movies")
        .DataTable(
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
                    data: "name"
                },
                {
                    data: "genre.name"
                }
            ]
        });
});