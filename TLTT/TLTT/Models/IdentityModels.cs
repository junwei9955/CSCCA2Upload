using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Security.Claims;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;


namespace TLTT.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }

    }


    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
        : base(GetRDSConnectionString())
        {

        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            
            base.OnModelCreating(modelBuilder);
            //AspNetUsers -> User
            modelBuilder.Entity<ApplicationUser>()
                .ToTable("User");
            modelBuilder.Entity<IdentityRole>()
                .ToTable("Role");
            modelBuilder.Entity<IdentityUserRole>()
                .ToTable("UserRole");
            modelBuilder.Entity<IdentityUserClaim>()
                .ToTable("UserClaim");
            modelBuilder.Entity<IdentityUserLogin>()
                .ToTable("UserLogin");
        }


        public static string GetRDSConnectionString()
        {
            var appConfig = ConfigurationManager.AppSettings;

            string dbname = appConfig["RDS_DB_NAME"];

            if (string.IsNullOrEmpty(dbname)) return null;

            string username = appConfig["RDS_USERNAME"];
            string password = appConfig["RDS_PASSWORD"];
            string hostname = appConfig["RDS_HOSTNAME"];
            string port = appConfig["RDS_PORT"];

            return "Data Source=" + hostname + ";Initial Catalog=" + dbname + ";User ID=" + username + ";Password=" + password + ";";
        }


    }

}