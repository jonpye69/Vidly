using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class MoviesController : Controller
    {
        private ApplicationDbContext _context;

        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }

        // GET: Customers
        public ViewResult Index()
        {
            var movies = _context.Movies.Include(m => m.Genre).ToList();

            return View(movies);
        }

        public ActionResult New()
        {
            var genres = _context.Genres.ToList();
            var movieVM = new MovieFormViewModel
            {
                Genres = genres
            };

            return View("MovieForm", movieVM);
        }

        public ActionResult Details(int id)
        {
            var movie = _context.Movies.Include(m => m.Genre).SingleOrDefault(m => m.Id == id);

            if (movie == null)
                return HttpNotFound();

            return View(movie);
        }

        // GET: Movies/Edit/1
        public ActionResult Edit(int id)
        {
            var movie = _context.Movies.SingleOrDefault(m => m.Id == id);

            if (movie == null)
                return HttpNotFound();

            var movieVM = new MovieFormViewModel
            {
                Movie = movie,
                Genres = _context.Genres.ToList()
            };

            return View("MovieForm", movieVM);
        }

        public ActionResult Save(MovieFormViewModel movieFormVM)
        {
            if (movieFormVM?.Movie == null)
                return HttpNotFound();

            if (movieFormVM.Movie.Id == 0)
            {
                movieFormVM.Movie.DateAdded = DateTime.Now;
                _context.Movies.Add(movieFormVM.Movie);
            }
            else
            {
                var existingMovie = _context.Movies.Single(m => m.Id == movieFormVM.Movie.Id);
                Mapper.Map(movieFormVM, existingMovie);
            }

            try
            {
                _context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                Console.WriteLine(e);
            }


            return RedirectToAction("Index");
        }

        #region Redundant_Code_Snippets_REF
        // GET: Movies
        //public ActionResult Index()
        //{
        //    var movies = new List<Movie>
        //    {
        //        new Movie { Name = "Forrest Gump" },
        //        new Movie { Name = "Wall-E" }
        //    };

        //    return View(movies);
        //}

        // GET: Movies/Random
        public ActionResult Random()
        {
            var movie = new Movie() { Name = "Shrek" };
            var customers = new List<Customer>
            {
                new Customer { Name = "John Smith" },
                new Customer { Name = "Mary Williams" }
            };

            var viewModel = new RandomMovieViewModel
            {
                Movie = movie,
                Customers = customers
            };


            return View(viewModel);

            // TYPES OF ACTIONRESULT
            //return Content("Hello World");
            //return HttpNotFound();
            //return new EmptyResult();
            //return RedirectToAction("Index", "Home", new { page = 1, sortBy = "Name" });
        }


        // GET: Movies?pageIndex=1&sortBy=Name
        //public ActionResult Index(int? pageIndex, string sortBy)
        //{
        //    if (!pageIndex.HasValue)
        //        pageIndex = 1;

        //    if (string.IsNullOrWhiteSpace(sortBy))
        //        sortBy = "Name";

        //    return Content($"pageIndex={pageIndex}&sortBy={sortBy}");
        //}

        // GET: Movies/Released/1977/12 - attribute routing
        [Route("movies/released/{year}/{month:regex(\\d{2}):range(1, 12)}")]
        public ActionResult ByReleaseDate(int year, byte month)
        {
            return Content(year + "/" + month);
        }
        #endregion
    }
}