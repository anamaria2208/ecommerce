using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _storeContext;
        public ProductsController(StoreContext storeContext)
        {
            this._storeContext = storeContext;
        }

        [HttpGet]
         public async Task<ActionResult<List<Product>>> GetProducts()
        {
            List<Product> products =  await _storeContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            Product product = await _storeContext.Products.SingleOrDefaultAsync(x => x.Id == id);
            if (product == null)
            {
                return NotFound(); 
            }
            return Ok(product);
        }
        
    }
}