/// <reference path="bootstrapAlert.js" />
/// <reference path="../bootbox.js" />
/// <reference path="~/Scripts/DataTables/jquery.dataTables.js" />

// Customers api for rest operations
$(function () {

    var table = $("#customers").DataTable(
    {
        ajax: {
            url: "/api/customers",
            dataSrc: ""
        },
        columns: [
            {
                data: "name",
                render: function(data, type, customer) {
                    return "<a href='/customers/edit/" + customer.id + "'>" + customer.name;
                }
            },
            {
                data: "membershipType.name"  
            },
            {
                data: "id",
                render: function(data, type, customer) {
                    return "<button class='btn btn-sm btn-warning js-delete' data-customer-id=" + data + " data-customer-full-name='" + customer.name + "'><span class='glyphicon glyphicon-minus-sign'></span> Delete</button>";
                }
            }
        ]
    }); 


        // Delete a movie
    $("#customers").on("click", ".js-delete", function () {
        var button = $(this);

        bootbox.confirm({
            message: "Are you sure you wish to delete customer <b>" + button.data().customerFullName + "</b>?",
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
                        url: "/api/customers/" + button.data().customerId,
                        method: "DELETE",
                        success: function (result) {
                            if (result.success) {
                                table.row(button.parents("tr")).remove().draw();

                                bootstrapAlert.show('The customer <b>' +
                                        button.data().customerFullName +
                                        '</b> has successfully been deleted.',
                                        true);
                            }
                            else {
                                bootstrapAlert.show('The following error has occured: ' + result.message,
                                        false);
                            }
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
            }
        });


    });



    //$("#customers").on("click", ".js-delete", function () {
    //    var button = $(this);
    //    //var isSuccess = false;
    //    bootbox.confirm("Are you sure you wish to delete customer <b>" + button.data().customerFullName + "</b>?", function (result) {
    //        if (result) {
    //            $.ajax({
    //                url: "/api/customers/" + button.data().customerId,
    //                method: "DELETE",
    //                success: function () {
    //                    console.log("success");
    //                    //isSuccess = true;
    //                    table.row(button.parents("tr")).remove().draw();
    //                }
    //            });
    //        }
    //        //if (isSuccess) console.log(button.data().customerFullName + " has been deleted.");
    //    });

    //});

});