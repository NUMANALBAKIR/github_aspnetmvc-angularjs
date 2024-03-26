using System.Web.Mvc;
using Rabbit.Foundation.Configuration;

namespace AngularjsApp.MvcClient.Controllers
{
    public abstract class ControllerBase : Controller
    {
        protected IConfiguration Configuration
        {
            get
            {
                return DependencyResolver.Current.GetService<IConfiguration>();
            }
        }
    }
}