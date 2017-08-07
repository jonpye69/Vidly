/**
 * Provides a bootstrap alert  
 */
var bootstrapAlert = (function () {
    "use strict";

    var alert,
        icon,
        message,
        iconClass = {
            success: 'glyphicon-thumbs-up',
            danger: 'glyphicon-thumbs-down'
        },
        alertClass = {
            success: 'alert-success',
            danger: 'alert-danger'
        },
        that = {};

    that.init = function (options) {
        alert = $(options.selectors.alert);
        icon = $(options.selectors.icon);
        message = $(options.selectors.message);
    };

    that.show = function (text, isSuccess) {
        // Add type of alert class to alert
        alert.addClass(isSuccess ? alertClass.success : alertClass.danger);

        // Find the icon span, and append the glyphicon class to it
        alert.find(icon).addClass(isSuccess ? iconClass.success : iconClass.danger);

        alert.find(message).html(text);
        alert.fadeIn().delay(4000).fadeOut();
    };

    return that;
}());