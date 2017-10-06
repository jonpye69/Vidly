using System;

namespace Vidly.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        ICustomerRepository Customers { get; }
        int Complete();
    }
}