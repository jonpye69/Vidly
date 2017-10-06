using System.Data.Entity;
using Vidly.Models;

namespace Vidly.Repository
{
    public class CustomContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
    }
}