using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApi
{
    public class ProductContext : DbContext
    {
        public ProductContext()/*base("ProductDatabase")*/
        {

        }
        public DbSet<Product> Products { get; set; }

    }
}