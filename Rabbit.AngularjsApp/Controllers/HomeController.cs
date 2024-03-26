using System.Web.Mvc;

namespace AngularjsApp.MvcClient.Controllers
{
    public class HomeController : ControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
