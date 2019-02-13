namespace TLTT.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddIdMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "Id", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "Id");
        }
    }
}
