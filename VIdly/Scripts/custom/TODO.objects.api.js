$(function () {

   "use strict";

    // Note: all strings, one Id (objectIdProp)
    var obj = {
        classes: {
            btnDelete: ".js-delete"   // .js-delete (default)
        },
        selectors: {
            tblObjects: ""   // #customers    
        },
        urls: {
            getObjects: "",     // /api/customers
            getObject: "",      // /api/customers/23 GET endpoint
            editObject: "",     // /customers/edit/23 PUT endpoint
            deleteObject: ""    // /api/customers/23 DELETE endpoint
        },
        dataDeleteAttributes: {
            objectIdProp: "",     // some-id -> data().someId
            objectNameProp: ""    // some-value -> data().someValue
        },
        nestedObjectName: "",      // "membershipType.name",
        typeOfObj: ""           // customer
    };


    var dTable = $(obj.selectors.tblObjects)
        .DataTable(
        {
            ajax: {
                url: obj.urls.getObjects,
                dataSrc: ""
            },
            columns: [
            {
                data: "name",
                render: function(data, type, model) {
                    return "<a href='" + obj.urls.editObject + model.id + "'>" + model.name;
                }
            },
            {
                data: obj.nestedObjectName
            },
            {
                data: "id",
                render: function (data, type, model) {
                    return "<button class='btn btn-sm btn-warning js-delete' data-"
                        + obj.typeOfObj + "-id=" + data
                        + " data-" + obj.typeOfObj + "-full-name='" + model.name + "'>Delete</button>";
                }
            }
            ]

    });

    $(obj.selectors.tblObjects).on("click", obj.classes.btnDelete, function () {

        var button = $(this);

        bootbox.confirm("Are you sure you wish to delete " + obj.typeOfObj + " <b>" + button.data(obj.dataDeleteAttributes.objectNameProp) + "</b>?", function (result) {
            if (result) {
                $.ajax({
                    url: obj.urls.deleteObject + button.data().customerId,
                    method: "DELETE",
                    success: function () {
                        console.log("success");
                        dTable.row(button.parents("tr")).remove().draw();
                    }
                });
            }
        });

    });

});