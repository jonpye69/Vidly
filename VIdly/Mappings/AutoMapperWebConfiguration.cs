using AutoMapper;
using Vidly.DTOs;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Mappings
{
    public static class AutoMapperWebConfiguration
    {
        public static void Configure()
        {
            ConfigureCustomerVmObjectMapping();
            ConfigureMovieVmObjectMapping();

            //ConfigureCustomerObjectMapping();

            ConfigureDtoObjectMapping();

            // See method comment...you know, just for lols
            //ConfigureCustomerDtoObjectMapping();
            //ConfigureMovieDtoObjectMapping();

        }

        private static void ConfigureCustomerVmObjectMapping()
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

        private static void ConfigureMovieVmObjectMapping()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<MovieFormViewModel, Movie>()
                    .ForMember(d => d.Name,
                        o => o.MapFrom(s => s.Name))
                    .ForMember(d => d.ReleaseDate,
                        o => o.MapFrom(s => s.ReleaseDate))
                    //.ForMember(d => d.DateAdded,
                    //            o => o.MapFrom(s => s.Movie.DateAdded))
                    .ForMember(d => d.NumberInStock,
                        o => o.MapFrom(s => s.NumberInStock))
                    .ForMember(d => d.GenreId,
                        o => o.MapFrom(s => s.GenreId));
            });
        }

        //private static void ConfigureCustomerObjectMapping()
        //{
        //    Mapper.Initialize(cfg =>
        //    {
        //        cfg.CreateMap<Customer, Customer>();
        //    });
        //}



        // Seriously Automapper - why cant you deal with seperate initializations of multiple DTO's of differing types???  But nowhere on the net explains this!!!
        //private static void ConfigureMovieDtoObjectMapping()
        //{
        //    Mapper.Initialize(cfg =>
        //    {
        //        cfg.CreateMap<Movie, MovieDto>();

        //        cfg.CreateMap<MovieDto, Movie>()
        //        .ForMember(c => c.Id, opt => opt.Ignore());
        //    });
        //}

        //private static void ConfigureCustomerDtoObjectMapping()
        //{
        //    Mapper.Initialize(cfg =>
        //    {
        //        cfg.CreateMap<Customer, CustomerDto>();

        //        cfg.CreateMap<CustomerDto, Customer>()
        //            .ForMember(c => c.Id, opt => opt.Ignore());
        //    });
        //}

        private static void ConfigureDtoObjectMapping()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Customer, CustomerDto>();
                cfg.CreateMap<CustomerDto, Customer>()
                    .ForMember(c => c.Id, opt => opt.Ignore());

                cfg.CreateMap<Movie, MovieDto>();
                cfg.CreateMap<MovieDto, Movie>()
                .ForMember(c => c.Id, opt => opt.Ignore());
            });
        }

    }
}