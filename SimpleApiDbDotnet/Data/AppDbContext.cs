using Microsoft.EntityFrameworkCore;
using SimpleApiDbDotnet.Models;

namespace SimpleApiDbDotnet.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<UUIDEntity> UUIDEntities { get; set; }
}