using AutoMapper;
using System;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class CustomersController : BaseController
    {
        public CustomersController()
        {
            _context = new ApplicationDbContext();
        }

        public ActionResult New()
        {
            var membershipTypes = _context.MembershipTypes.ToList();
            var viewModel = new CustomerFormViewModel
            {
                Customer = new Customer(),
                MembershipOptions = membershipTypes
            };

            return View("CustomerForm", viewModel);
        }

        // GET: Customers
        public ViewResult Index()
        {
            //var customers = _context.Customers.Include(c => c.MembershipOption).ToList();

            //return View(customers);
            return View();
        }

        public ActionResult Details(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return HttpNotFound();

            return View(customer);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Save(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                var viewModel = new CustomerFormViewModel
                {
                    Customer = customer,
                    MembershipOptions = _context.MembershipTypes.ToList()
                };

                return View("CustomerForm", viewModel);
            }

            if (customer == null)
                return HttpNotFound();

            if (customer.Id == 0)
            {
                _context.Customers.Add(customer);
            }
            else
            {
                var existingCustomer = _context.Customers.Single(c => c.Id == customer.Id);
                Mapper.Map(customer, existingCustomer);

                // Automapper is so unhelpful resolving mapping issues!
                //Mapper.Map(customerFormVM, existingCustomer);

                //existingCustomer.Name = customerFormVM.Customer.Name;
                //existingCustomer.BirthDate = customerFormVM.Customer.BirthDate;
                //existingCustomer.MembershipTypeId = customerFormVM.Customer.MembershipTypeId;
                //existingCustomer.IsSubscribedToNewsletter = customerFormVM.Customer.IsSubscribedToNewsletter;
            }

            try
            {
                _context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                // TODO: would pump this out to the UI possibly, or at very least, log it!
                Console.WriteLine(e);
            }

            return RedirectToAction("Index");
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Save(CustomerFormViewModel customerFormVM)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        var viewModel = new CustomerFormViewModel
        //        {
        //            Customer = customerFormVM.Customer,
        //            MembershipOptions = _context.MembershipTypes.ToList()
        //        };

        //        return View("CustomerForm", viewModel);
        //    }

        //    if (customerFormVM?.Customer == null)
        //        return HttpNotFound();

        //    if (customerFormVM.Customer.Id == 0)
        //    {
        //        _context.Customers.Add(customerFormVM.Customer);
        //    }
        //    else
        //    {
        //        var existingCustomer = _context.Customers.Single(c => c.Id == customerFormVM.Customer.Id);

        //        // Automapper is so unhelpful resolving mapping issues!
        //        //Mapper.Map(customerFormVM, existingCustomer);

        //        existingCustomer.Name = customerFormVM.Customer.Name;
        //        existingCustomer.BirthDate = customerFormVM.Customer.BirthDate;
        //        existingCustomer.MembershipTypeId = customerFormVM.Customer.MembershipTypeId;
        //        existingCustomer.IsSubscribedToNewsletter = customerFormVM.Customer.IsSubscribedToNewsletter;
        //    }

        //    _context.SaveChanges();

        //    return RedirectToAction("Index", "Customers");
        //}

        public ActionResult Edit(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return HttpNotFound();

            var viewModel = new CustomerFormViewModel
            {
                Customer = customer,
                MembershipOptions = _context.MembershipTypes.ToList()
            };

            return View("CustomerForm", viewModel);
        }
    }
}