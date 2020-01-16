using System;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ag_anchorinfo.Models;

namespace ag_anchorinfo
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        private string ConvertPostConnectionToConnectionString(string connection)
        {
            var _connection = connection.Replace("postgres://", String.Empty);
            var output = Regex.Split(_connection, ":|@|/");
            return $"server={output[2]};database={output[4]};User Id={output[0]}; password={output[1]}; port={output[3]}";
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var envConn = Environment.GetEnvironmentVariable("DATABASE_URL");

                var conn = "server=localhost;database=ag_anchorinfo3;User Id=postgres;Password=Nadas0ul299114#";
                if (envConn != null)
                {
                    conn = ConvertPostConnectionToConnectionString(envConn);
                }
                optionsBuilder.UseNpgsql(conn);
            }
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");
            modelBuilder.Entity<LineSurveyLiquor>().HasKey(lsl => new { lsl.LineSurveyId, lsl.LiquorId });

            modelBuilder.Entity<LineSurveyLiquor>().HasOne(ls => ls.LineSurvey).WithMany(l => l.LineSurveyLiquors).HasForeignKey(ls => ls.LineSurveyId);

            modelBuilder.Entity<LineSurveyLiquor>().HasOne(ls => ls.Liquor).WithMany(l => l.LineSurveyLiquors).HasForeignKey(ls => ls.LiquorId);

            modelBuilder.Entity<LineSurveyFood>().HasKey(lsl => new { lsl.LineSurveyId, lsl.FoodId });

            modelBuilder.Entity<LineSurveyFood>().HasOne(ls => ls.LineSurvey).WithMany(l => l.LineSurveyFoods).HasForeignKey(ls => ls.LineSurveyId);

            modelBuilder.Entity<LineSurveyFood>().HasOne(ls => ls.Food).WithMany(l => l.LineSurveyFoods).HasForeignKey(ls => ls.FoodId);

            modelBuilder.Entity<LineSurveyBeer>().HasKey(lsl => new { lsl.LineSurveyId, lsl.BeerId });

            modelBuilder.Entity<LineSurveyBeer>().HasOne(ls => ls.LineSurvey).WithMany(l => l.LineSurveyBeers).HasForeignKey(ls => ls.LineSurveyId);

            modelBuilder.Entity<LineSurveyBeer>().HasOne(ls => ls.Beer).WithMany(l => l.LineSurveyBeers).HasForeignKey(ls => ls.BeerId);

        }
        public DbSet<ProspectiveCustomer> ProspectiveCustomers { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<LineSurvey> LineSurveys { get; set; }
        public DbSet<Beer> Beers { get; set; }

        public DbSet<Food> Foods { get; set; }
        public DbSet<Liquor> Liquors { get; set; }
    }
}
