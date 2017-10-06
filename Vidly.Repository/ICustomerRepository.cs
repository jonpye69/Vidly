using System.Collections.Generic;
using Vidly.Models;

namespace Vidly.Repository
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        IEnumerable<Customer> GetCustomersEqualOrAboveCertainAge(int years);
    }
}