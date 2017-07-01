using System;

namespace Vidly.Utilities.Extensions
{
    public static class DateTimeExtensions
    {
        /// <summary>
        /// Calculates a persons age in years from todays date
        /// </summary>
        /// <param name="birthDate">The date the person was born</param>
        /// <returns></returns>
        public static int Age(this DateTime birthDate)
        {
            var age = DateTime.Now.Year - birthDate.Year;

            if (age > 0)
            {
                age -= Convert.ToInt32(DateTime.Now.Date < birthDate.Date.AddYears(age));
            }
            else
            {
                age = 0;
            }

            return age;
        }

        public static string ToVDateTimeString(this DateTime? inputDate)
        {
            return inputDate?.ToString("dd/MM/yyyy") ?? Defaults.EmptyText;
        }
    }
}
