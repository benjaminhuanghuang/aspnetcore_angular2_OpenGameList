using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpenGameListWebApp.ViewModels;
using Newtonsoft.Json;
namespace OpenGameListWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        [HttpGet()]
        public IActionResult Get()
        {
            return NotFound(new { Error = "not found" });
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = GetSampleItems().Where(i => i.Id == id).FirstOrDefault();
            return new JsonResult(item, DefaultJsonSettings);
        }

        [HttpGet("GetLatest")]
        public IActionResult GetLatest()
        {
            return GetLatest(DefaultNumberOfItems);
        }
        // GET api/items/GetLatest/5
        [HttpGet("GetLatest/{n}")]
        public JsonResult GetLatest(int n)
        {
            if (n > MaxNumberOfItems) 
                n = MaxNumberOfItems;
            var items = GetSampleItems().OrderByDescending(i => i.CreatedDate).Take(n);
            return new JsonResult(items, DefaultJsonSettings);
        }
        [HttpGet("GetMostViewed")]
        public IActionResult GetMostViewed()
        {
            return GetMostViewed(DefaultNumberOfItems);
        }

        [HttpGet("GetMostViewed/{n}")]
        public IActionResult GetMostViewed(int n)
        {
            if (n > MaxNumberOfItems) 
                n = MaxNumberOfItems;
            var items = GetSampleItems().OrderByDescending(i => i.ViewCount).Take(n);
            return new JsonResult(items, DefaultJsonSettings);
        }
        [HttpGet("GetRandom")]
        public IActionResult GetRandom()
        {
            return GetRandom(DefaultNumberOfItems);
        }

        [HttpGet("GetRandom/{n}")]
        public IActionResult GetRandom(int n)
        {
            if (n > MaxNumberOfItems) 
                n = MaxNumberOfItems;
            var items = GetSampleItems().OrderBy(i => Guid.NewGuid()).Take(n);
            return new JsonResult(items, DefaultJsonSettings);
        }

        private List<ItemViewModel> GetSampleItems(int num = 999)
        {
            List<ItemViewModel> lst = new List<ItemViewModel>();
            DateTime date = new DateTime(2015, 12, 31).AddDays(-num);
            for (int id = 1; id <= num; id++)
            {
                lst.Add(new ItemViewModel()
                    {
                        Id = id,
                        Title = String.Format("Item {0} Title", id),
                        Description = String.Format("This is a sample description for item {0}: Lorem ipsum dolor sit amet.", id),
                        CreatedDate = date.AddDays(id),
                        LastModifiedDate = date.AddDays(id),
                        ViewCount = num - id
                    });
            }
            return lst;
        }

        private JsonSerializerSettings DefaultJsonSettings
        {
            get
            {
                return new JsonSerializerSettings()
                {
                    Formatting = Formatting.Indented
                };
            }
        }
        private int DefaultNumberOfItems
        {
            get
            {
                return 5;
            }
        }
        private int MaxNumberOfItems
        {
            get
            {
                return 100;
            }
        }
    }
}