using Microsoft.Owin;
using Owin;
using Vidly.Mappings;

[assembly: OwinStartupAttribute(typeof(Vidly.Startup))]
namespace Vidly
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            AutoMapperWebConfiguration.Configure();
        }
    }
}
