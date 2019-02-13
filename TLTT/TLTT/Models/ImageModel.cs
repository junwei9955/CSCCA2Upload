using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TLTT.Models
{
    public class ImageModel
    {
        public int Id { get; set; }
        public string s3BucketName { get; set; }
        public string objKey { get; set; }
    }
}