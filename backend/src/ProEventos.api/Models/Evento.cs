using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.api.Models
{
    public class Evento
    {
        public long Id { get; set; }
        public string Local { get; set; }
        public string DataEvento { get; set; }
        public string Tema { get; set; }
        public int QtdePessoas { get; set; }
        public string Lote { get; set; }
        public string ImageUrl { get; set; }
    }
}