using System;
using System.Collections.Generic;
using System.Linq;
using Vidly.Models;

namespace Vidly.Repository
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(CustomContext context) : base(context)
        {
        }

        public IEnumerable<Customer> GetCustomersEqualOrAboveCertainAge(int years)
        {
            return CustomContext.Customers.Where(c => DateTime.Now.Year - c.BirthDate.Value.Year >= years);
        }

        public CustomContext CustomContext => Context as CustomContext;
    }
}