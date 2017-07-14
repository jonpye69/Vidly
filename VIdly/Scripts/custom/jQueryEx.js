$(function() {
    $("#customers .js-delete").on("click", function() {
        if (confirm("Are you sure you wish to delete this customer?")) {
            $.ajax({
                url: "/api/customers/" + $(this).data().customerId,
                method: "DELETE",
                success: function () {
                    console.log("success");
                }
            });
        }
    });
});