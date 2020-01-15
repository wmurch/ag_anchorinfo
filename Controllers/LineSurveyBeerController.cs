using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ag_anchorinfo;
using ag_anchorinfo.Models;

namespace ag_anchorinfo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LineSurveyBeerController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LineSurveyBeerController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LineSurveyBeer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LineSurveyBeer>>> GetLineSurveyBeers()
        {
            return await _context.LineSurveyBeers.ToListAsync();
        }

        // GET: api/LineSurveyBeer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LineSurveyBeer>> GetLineSurveyBeer(int id)
        {
            var lineSurveyBeer = await _context.LineSurveyBeers.FindAsync(id);

            if (lineSurveyBeer == null)
            {
                return NotFound();
            }

            return lineSurveyBeer;
        }

        // PUT: api/LineSurveyBeer/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLineSurveyBeer(int id, LineSurveyBeer lineSurveyBeer)
        {
            if (id != lineSurveyBeer.Id)
            {
                return BadRequest();
            }

            _context.Entry(lineSurveyBeer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LineSurveyBeerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LineSurveyBeer
        [HttpPost]
        public async Task<ActionResult<LineSurveyBeer>> PostLineSurveyBeer(LineSurveyBeer lineSurveyBeer)
        {
            _context.LineSurveyBeers.Add(lineSurveyBeer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLineSurveyBeer", new { id = lineSurveyBeer.Id }, lineSurveyBeer);
        }

        // DELETE: api/LineSurveyBeer/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LineSurveyBeer>> DeleteLineSurveyBeer(int id)
        {
            var lineSurveyBeer = await _context.LineSurveyBeers.FindAsync(id);
            if (lineSurveyBeer == null)
            {
                return NotFound();
            }

            _context.LineSurveyBeers.Remove(lineSurveyBeer);
            await _context.SaveChangesAsync();

            return lineSurveyBeer;
        }

        private bool LineSurveyBeerExists(int id)
        {
            return _context.LineSurveyBeers.Any(e => e.Id == id);
        }
    }
}
