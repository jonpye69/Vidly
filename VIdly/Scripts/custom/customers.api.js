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

// Customers api for rest operations
$(function () {

    var table = $("#customers").DataTable(
    {
        ajax: {
            url: "/api/customers",
            dataSrc: ""
        },
        "language": {
            "emptyTable": "No Customers available in table"
        },
        columns: [
            {
                data: "name",
                render: function(data, type, customer) {
                    return "<a href='/customers/edit/" + customer.id + "'>" + customer.name + "</a>";
                }
            },
            {
                data: "membershipOption.name"  
            },
            {
                data: "id",
                render: function(data, type, customer) {
                    return "<button class='btn btn-sm btn-warning js-delete' data-customer-id=" + data + " data-customer-full-name='" + customer.name + "'><span class='glyphicon glyphicon-minus-sign'></span> Delete</button>";
                }
            }
        ]
    }); 


    // Delete a customer
    $("#customers").on("click", ".js-delete", function (e) {

        var button = $(this);
        e.preventDefault();

        bootbox.confirm({
            message: "Are you sure you wish to delete movie <b>" + button.data().customerFullName + "</b>?",
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
                    deleteCustomer(button);
                }
            }
        });


    });

    function deleteCustomer(button) {

        $.ajax({
            url: "/api/customers/" + button.data().customerId,
            type: "DELETE",
            success: function () {
                table.row(button.parents("tr")).remove().draw();

                bootstrapAlert.show('The customer <b>' +
                        button.data().customerFullName +
                        '</b> has successfully been deleted.',
                        true);
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    table.row(button.parents("tr")).remove().draw();
                    bootstrapAlert.show('The record for ' + button.data().customerFullName + ' could not be located.',
                           false);
                }

            }

        });
    }

});