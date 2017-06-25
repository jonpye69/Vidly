using AutoMapper;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Mappings
{
    public static class AutoMapperWebConfiguration
    {
        public static void Configure()
        {
            ConfigureCustomerObjectMapping();
            ConfigureMovieObjectMapping();
        }

        private static void ConfigureCustomerObjectMapping()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<CustomerFormViewModel, Customer>()
                .ForMember(d => d.Name,
                            o => o.MapFrom(s => s.Customer.Name))
                .ForMember(d => d.BirthDate,
                            o => o.MapFrom(s => s.Customer.BirthDate))
                .ForMember(d => d.IsSubscribedToNewsletter,
                            o => o.MapFrom(s => s.Customer.IsSubscribedToNewsletter))
                .ForMember(d => d.MembershipTypeId,
                            o => o.MapFrom(s => s.Customer.MembershipTypeId));
            });
        }

        private static void ConfigureMovieObjectMapping()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<MovieFormViewModel, Movie>()
                .ForMember(d => d.Name,
                            o => o.MapFrom(s => s.Movie.Name))
                .ForMember(d => d.ReleaseDate,
                            o => o.MapFrom(s => s.Movie.ReleaseDate))
                //.ForMember(d => d.DateAdded,
                //            o => o.MapFrom(s => s.Movie.DateAdded))
                .ForMember(d => d.NumberInStock,
                            o => o.MapFrom(s => s.Movie.NumberInStock))
                .ForMember(d => d.GenreId,
                            o => o.MapFrom(s => s.Movie.GenreId));
            });
        }
    }
}