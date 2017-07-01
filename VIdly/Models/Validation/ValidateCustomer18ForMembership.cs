using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using static Vidly.Utilities.Extensions.DateTimeExtensions;

namespace Vidly.Models.Validation
{
    public class ValidateCustomer18ForMembership : ValidationAttribute, IClientValidatable
    {
        //public readonly GeneralEnums.CustomerProperty _customerProperty;

        //public ValidateCustomer18ForMembership(GeneralEnums.CustomerProperty customerProperty)
        //{
        //    _customerProperty = customerProperty;
        //}

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var customer = (Customer)validationContext.ObjectInstance;

            // We dont need a birth date if pay as you go
            if (customer.MembershipTypeId == MembershipType.Unknown || customer.MembershipTypeId == MembershipType.PayAsYouGo)
            {
                return ValidationResult.Success;
            }

            if (customer.BirthDate == null)
            {
                return new ValidationResult("Birth date is required.");
            }

            var ageInYears = customer.BirthDate.Value.Age();

            return ageInYears >= 18
                ? ValidationResult.Success
                : new ValidationResult("Customer must be 18 or older to use a membership scheme.");
        }


        // This allows us to append to jq validate to provide client side validation for our business rule
        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            ModelClientValidationRule customer18ForMembership = new ModelClientValidationRule
            {
                ValidationType = "customerageformembership",
                ErrorMessage = "Customer must be 18 or older to use a membership scheme."
            };

            //customer18ForMembership.ValidationParameters.Add("membershiptypeid", _customerProperty);

            yield return customer18ForMembership;
        }
    }
}