namespace VIdly.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class addThrillerToGenre : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO Genres (Id, Name) VALUES (5, 'Thriller')");
        }

        public override void Down()
        {
        }
    }
}
