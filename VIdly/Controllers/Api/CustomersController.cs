using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Vidly.DTOs;
using Vidly.Models;

namespace Vidly.Controllers.Api
{
    public class CustomersController : ApiController
    {
        private readonly ApplicationDbContext _context;

        public CustomersController()
        {
            _context = new ApplicationDbContext();
        }

        // GET: /api/customers
        //public IHttpActionResult GetCustomers()
        //{
        //    var customers = _context.Customers.ToList()
        //        .Select(Mapper.Map<Customer, CustomerDto>);

        //    return Ok(customers);
        //}

        public IEnumerable<CustomerDto> GetCustomers()
        {
            return _context.Customers.ToList()
                .Select(Mapper.Map<Customer, CustomerDto>);

        }

        // GET /api/customers/1
        public IHttpActionResult GetCustomer(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return NotFound();

            return Ok(Mapper.Map<Customer, CustomerDto>(customer));
        }

        // POST /api/customers
        [HttpPost]
        public IHttpActionResult CreateCustomer(CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var customer = Mapper.Map<CustomerDto, Customer>(customerDto);
            _context.Customers.Add(customer);
            _context.SaveChanges();

            customerDto.Id = customer.Id;

            return Created(new Uri($"{Request.RequestUri}/{customer.Id}"), customerDto);
        }

        // PUT /api/customers/1
        [HttpPut]
        public IHttpActionResult UpdateCustomer(int id, CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var existingCustomer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (existingCustomer == null)
                return NotFound();

            Mapper.Map(customerDto, existingCustomer);
            _context.SaveChanges();

            return Ok();
        }

        // DELETE /api/customers/1
        [HttpDelete]
        public IHttpActionResult DeleteCustomer(int id)
        {
            var existingCustomer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (existingCustomer == null)
                return NotFound();

            _context.Customers.Remove(existingCustomer);
            _context.SaveChanges();

            return Ok();
        }
    }
}
