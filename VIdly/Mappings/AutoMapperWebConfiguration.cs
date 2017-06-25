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
    }
}