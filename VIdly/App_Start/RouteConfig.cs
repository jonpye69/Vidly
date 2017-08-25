using System.Web.Mvc;
using System.Web.Routing;

namespace Vidly
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapMvcAttributeRoutes();

            //routes.MapRoute(
            //    "MoviesByReleaseDate",
            //    "movies/released/{year}/{month}",
            //    new { controller = "Movies", action = "ByReleaseDate" },
            //    new { year = @"2015|2016", month = @"\d{2}" }
            //);

            // Ensure angular doesnt break (redirect) theres routes!
            routes.MapRoute(
             name: "Origin",
             url: "",
             defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
             name: "Movies",
             url: "Movies",
             defaults: new { controller = "Movies", action = "Index" });

            routes.MapRoute(
             name: "MoviesNew",
             url: "Movies/New",
             defaults: new { controller = "Movies", action = "New" });


            routes.MapRoute(
            name: "Customers",
            url: "Customers",
            defaults: new { controller = "Customers", action = "Index" });

            routes.MapRoute(
            name: "CustomersNew",
            url: "Customers/New",
            defaults: new { controller = "Customers", action = "New" });

            routes.MapRoute(
             name: "Spa",
             url: "Spa",
             defaults: new { controller = "Spa", action = "Index" });

            // For angular
            routes.MapRoute(
             name: "Home",
             url: "{*url}",
             defaults: new { controller = "Home", action = "Index" });

            // routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            ////, constraints: new { controller = "Home|Account|Upload|Resource" } // this is basically a regular expression
            //);




        }
    }
}
