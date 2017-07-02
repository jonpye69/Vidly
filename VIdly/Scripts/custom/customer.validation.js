/// <reference path="functions.js" />
"use strict";

// Objects for various types of validation for customer model
var customerMembership = {
    associatedClass: '.js-membership-type',
    validationName: 'customerageformembership'
};

// We only want to work with dd/MM/yyyy formats, else we want client validation to kick in
jQuery.validator.methods.date = function (value, element) {
    var dateRegex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
    return this.optional(element) || dateRegex.test(value);
};

$.validator.addMethod(customerMembership.validationName, function (value) {
   
    // If no dob, and no membership type
    if (!value && (!($(customerMembership.associatedClass).val()) || Number($(customerMembership.associatedClass).val()) < 2)) return true;

    return getAge(value) >= 18 && Number($(customerMembership.associatedClass).val()) >= 2;
});

$.validator.unobtrusive.adapters.add(customerMembership.validationName, function (options) {    // ["membershiptypeid"]

    //adding rules for validator
    options.rules[customerMembership.validationName] = "#" + options.element.name.replace('.', '_'); // mvc html helpers
    options.messages[customerMembership.validationName] = options.message;

});