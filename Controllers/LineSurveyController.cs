using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ag_anchorinfo.Models;

namespace ag_anchorinfo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LineSurveyController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LineSurveyController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LineSurvey
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LineSurvey>>> GetLineSurveys()
        {
            return await _context.LineSurveys.ToListAsync();
        }

        // GET: api/LineSurvey/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LineSurvey>> GetLineSurvey(int id)
        {
            var lineSurvey = await _context.LineSurveys.FindAsync(id);

            if (lineSurvey == null)
            {
                return NotFound();
            }

            return lineSurvey;
        }

        // PUT: api/LineSurvey/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLineSurvey(int id, LineSurvey lineSurvey)
        {
            if (id != lineSurvey.Id)
            {
                return BadRequest();
            }

            _context.Entry(lineSurvey).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LineSurveyExists(id))
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

        // POST: api/LineSurvey
        [HttpPost]
        public async Task<ActionResult<LineSurvey>> PostLineSurvey(LineSurvey lineSurvey)
        {
            _context.LineSurveys.Add(lineSurvey);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLineSurvey", new { id = lineSurvey.Id }, lineSurvey);
        }

        // DELETE: api/LineSurvey/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LineSurvey>> DeleteLineSurvey(int id)
        {
            var lineSurvey = await _context.LineSurveys.FindAsync(id);
            if (lineSurvey == null)
            {
                return NotFound();
            }

            _context.LineSurveys.Remove(lineSurvey);
            await _context.SaveChangesAsync();

            return lineSurvey;
        }

        private bool LineSurveyExists(int id)
        {
            return _context.LineSurveys.Any(e => e.Id == id);
        }
    }
}
