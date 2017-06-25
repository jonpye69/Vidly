using System.Web.Mvc;
using Vidly.Models;

namespace Vidly.Controllers
{
    public class BaseController : Controller
    {
        protected ApplicationDbContext _context;

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
    }
}