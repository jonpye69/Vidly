using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Vidly.Mappings;

namespace Vidly
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapperWebConfiguration.Configure();
            //Mapper.Initialize(c => c.AddProfile<AutoMapperWebConfiguration>());

            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            // Auto map VM's to domain models, DTOs to domain models, and domain models to domain models
            //AutoMapperWebConfiguration.Configure();

        }
    }
}
