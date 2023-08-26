using Microsoft.EntityFrameworkCore;
using ProEventos.api.Models;

namespace ProEventos.api.Data
{
    public class ProEventoDbContext : DbContext
    {
        public ProEventoDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Evento> Eventos { get; set; }
    }
}