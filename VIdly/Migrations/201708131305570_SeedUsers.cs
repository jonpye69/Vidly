namespace Vidly.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'3510261f-4e53-4142-9cfa-f8121fdbee11', N'guest@vidly.com', 0, N'ACm0bzv3lLryet3M6E/zd9U/Ym5Vt0ZtJMOP9WqR8g5v8toukGhqTxBEcQTKZDR8SA==', N'3bff438a-8a59-446f-87ab-d2391b40a8d8', NULL, 0, 0, NULL, 1, 0, N'guest@vidly.com')
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'3ce1b6d6-d130-4fc1-8a1f-6585bd6175fc', N'admin@vidly.com', 0, N'ACPnIeS6lDaDJGOz1P6fDdSluUViNfrcLQ/HWcV/px3tk/sOcttV7dnofZWX3Ags4w==', N'cd1e0fab-d6f6-456d-b73a-e48db03b0319', NULL, 0, 0, NULL, 1, 0, N'admin@vidly.com')
                
                INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'3dc24831-e2ac-4193-a427-896d184da158', N'CanManageMovies')
                
                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'3ce1b6d6-d130-4fc1-8a1f-6585bd6175fc', N'3dc24831-e2ac-4193-a427-896d184da158')");
        }

        public override void Down()
        {
        }
    }
}
