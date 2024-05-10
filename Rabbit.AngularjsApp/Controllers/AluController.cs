
using System.Web.Mvc;

namespace AngularjsApp.MvcClient.Controllers
{
    public class AluController : ControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult myalu()
        {
            return View("Index");
        }


    }
}