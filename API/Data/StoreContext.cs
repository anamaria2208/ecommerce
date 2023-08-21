using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    // A DbContext instance represents a session with the database and can be used to query and save instances of your entities
    public class StoreContext : DbContext
    {
        //It takes an instance of DbContextOptions<StoreContext> as a parameter and passes it to the base DbContext constructor using base(options). The DbContextOptions contains configuration settings for the database context.
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new DbInitializer(modelBuilder).Initialize();
        }


    }
}