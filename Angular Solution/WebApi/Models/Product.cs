using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi
{
    public class Product
    {
        public Guid Id { get; set; }
        public string ProductName { get; set; }
        public string CountryOfOrigin { get; set; }
        public decimal ProductBasePrice { get; set; }
        public string ProductImageUrl { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string ProductDescription { get; set; }
        public string ProductVendor { get; set; }
        public string ProductModel { get; set; }

        public override string ToString()
        {
            return this.ProductName.ToString();
        }


    }    
}