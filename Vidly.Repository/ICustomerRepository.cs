using System.Collections.Generic;
using Vidly.Models;

namespace Vidly.Repository
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetCustomersEqualOrAboveCertainAge(int years);
    }
}