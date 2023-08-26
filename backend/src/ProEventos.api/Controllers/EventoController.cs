using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProEventos.api.Data;
using ProEventos.api.Models;

namespace ProEventos.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    ProEventoDbContext _dbContext;

    public EventoController(ProEventoDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IEnumerable<Evento> get()
    {
        return _dbContext.Eventos;
    }

    [HttpGet("{id}")]
    public Evento GetById(long id)
    {
        return _dbContext.Eventos.FirstOrDefault(evento=>evento.Id == id);
    }

    [HttpPost]
    public string Post()
    {
        return "Requisição POST";
    }

    [   HttpPut("{id}")]
    public string Put(long id)
    {
        return "Requisição PUT";
    }

    [HttpDelete("{id}")]
    public string Delete(long id)
    {
        return "Requisição DELETE";
    }
}
