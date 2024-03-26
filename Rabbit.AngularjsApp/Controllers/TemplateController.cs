using System.Web.Mvc;

namespace AngularjsApp.MvcClient.Controllers
{
    public class TemplateController : ControllerBase
    {
        public ActionResult Welcome()
        {
            ViewBag.WebpagesVersion = Configuration.Get("webpages:Version");
            return PartialView();
        }

        public ActionResult Test()
        {
            return PartialView();
        }
    }
}