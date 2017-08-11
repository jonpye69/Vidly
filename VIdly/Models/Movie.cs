using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace Vidly.Models
{
    public class Movie
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

        public Genre Genre { get; set; }

        [Required]
        [Display(Name = "Genre")]
        public byte GenreId { get; set; }

        public DateTime DateAdded { get; set; }

        [Display(Name = "Release Date")]
        public DateTime ReleaseDate { get; set; }

        [Display(Name = "Number In Stock")]
        [Range(1, 20)]
        public byte NumberInStock { get; set; }
    }
}