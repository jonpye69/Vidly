using System.Globalization;
using System.Web.Mvc;

namespace Vidly.Models
{
    public class TitleCaseModelBinder : DefaultModelBinder
    {
        protected override void SetProperty(ControllerContext controllerContext,
          ModelBindingContext bindingContext,
          System.ComponentModel.PropertyDescriptor propertyDescriptor, object value)
        {
            if (propertyDescriptor.PropertyType == typeof(string) && propertyDescriptor.Name == "Name")
            {
                var stringValue = (string)value;
                value = !string.IsNullOrWhiteSpace(stringValue) ? CultureInfo.CurrentCulture.TextInfo.ToTitleCase(stringValue) : null;
            }

            base.SetProperty(controllerContext, bindingContext,
                                propertyDescriptor, value);
        }
    }
}