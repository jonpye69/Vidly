using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using Vidly.Models.Validation;

namespace Vidly.Models
{
    public class Customer
    {
        public int Id { get; set; }

        private string name;

        [Required]
        [StringLength(255)]
        public string Name
        {
            get { return name; }
            set { name = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(value); }
        }

        //[Required]
        //[StringLength(255)]
        //public string Name { get; set; }

        [Display(Name = "Date Of Birth")]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        [ValidateCustomer18ForMembership]   //(GeneralEnums.CustomerProperty.MembershipTypeId)
        public DateTime? BirthDate { get; set; }

        public bool IsSubscribedToNewsletter { get; set; }

        public MembershipType MembershipType { get; set; }

        [Display(Name = "Membership Type")]
        public byte MembershipTypeId { get; set; }
    }
}