namespace TLTT.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ImageModel1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ImageModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        s3BucketName = c.String(),
                        objKey = c.String(),
                        ApplicationUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.ApplicationUser_Id)
                .Index(t => t.ApplicationUser_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ImageModels", "ApplicationUser_Id", "dbo.User");
            DropIndex("dbo.ImageModels", new[] { "ApplicationUser_Id" });
            DropTable("dbo.ImageModels");
        }
    }
}
