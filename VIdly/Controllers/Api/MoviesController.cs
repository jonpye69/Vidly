using AutoMapper;
using System;
using System.Linq;
using System.Web.Http;
using Vidly.DTOs;
using Vidly.Models;

namespace Vidly.Controllers.Api
{
    public class MoviesController : ApiController
    {
        private readonly ApplicationDbContext _context;

        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }

        // GET: /api/movies
        public IHttpActionResult GetMovies()
        {
            var movies = _context.Movies.ToList()
                .Select(Mapper.Map<Movie, MovieDto>);

            return Ok(movies);
        }

        // GET /api/movies/1
        public IHttpActionResult GetMovie(int id)
        {
            var movies = _context.Movies.SingleOrDefault(c => c.Id == id);

            if (movies == null)
                return NotFound();

            return Ok(Mapper.Map<Movie, MovieDto>(movies));
        }

        // POST /api/movies
        [HttpPost]
        public IHttpActionResult CreateMovie(MovieDto movieDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var movie = Mapper.Map<MovieDto, Movie>(movieDto);
            _context.Movies.Add(movie);
            _context.SaveChanges();

            movieDto.Id = movie.Id;

            return Created(new Uri($"{Request.RequestUri}/{movie.Id}"), movieDto);
        }

        // PUT /api/movies/1
        [HttpPut]
        public IHttpActionResult UpdateMovie(int id, MovieDto movieDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var existingMovie = _context.Movies.SingleOrDefault(c => c.Id == id);

            if (existingMovie == null)
                return NotFound();

            Mapper.Map(movieDto, existingMovie);
            _context.SaveChanges();

            return Ok();
        }

        // DELETE /api/movies/1
        [HttpDelete]
        public IHttpActionResult DeleteMovie(int id)
        {
            var existingMovie = _context.Movies.SingleOrDefault(c => c.Id == id);

            if (existingMovie == null)
                return NotFound();

            _context.Movies.Remove(existingMovie);
            _context.SaveChanges();

            return Ok();
        }
    }
}