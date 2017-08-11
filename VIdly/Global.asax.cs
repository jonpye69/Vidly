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
            GlobalConfiguration.Configure(WebApiConfig.Register);

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            // Auto map (VM's to domain models) plus domain models > domain models, and DM > DTO (and vice versa) for web objects
            AutoMapperWebConfiguration.Configure();

            /* Allow us to title case name properties - would use this as is, would be madness,
             *  but left in and commented as will use a custom model binder for something! 
             */
            //ModelBinders.Binders.DefaultBinder = new TitleCaseModelBinder();
        }
    }
}
