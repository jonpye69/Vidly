namespace Vidly.Models
{
    public class MembershipType
    {
        public byte Id { get; set; }
        public string Name { get; set; }
        public short SignUpFee { get; set; }
        public byte DurationInMonths { get; set; }
        public byte DiscountRate { get; set; }

        // Could hold an enum but dont want to invoke casting, and we are only interested in the first 2 values
        // Refactor to an enum property held on Customer model if cases for other values
        public static readonly byte Unknown = 0;
        public static readonly byte PayAsYouGo = 0;


    }
}