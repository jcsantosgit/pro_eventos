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
    public IActionResult Get()
    {
        try
        {
            return Ok(_dbContext.Eventos);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{id}")]
    public IActionResult GetById(long id)
    {
        try
        {
            var query = _dbContext.Eventos.FirstOrDefault(evento=>evento.Id == id);
            return Ok(query);            
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
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
