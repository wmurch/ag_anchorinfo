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
    public class LineSurveyLiquorController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LineSurveyLiquorController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LineSurveyLiquor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LineSurveyLiquor>>> GetLineSurveyLiquors()
        {
            return await _context.LineSurveyLiquors.ToListAsync();
        }

        // GET: api/LineSurveyLiquor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LineSurveyLiquor>> GetLineSurveyLiquor(int id)
        {
            var lineSurveyLiquor = await _context.LineSurveyLiquors.FindAsync(id);

            if (lineSurveyLiquor == null)
            {
                return NotFound();
            }

            return lineSurveyLiquor;
        }

        // PUT: api/LineSurveyLiquor/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLineSurveyLiquor(int id, LineSurveyLiquor lineSurveyLiquor)
        {
            if (id != lineSurveyLiquor.Id)
            {
                return BadRequest();
            }

            _context.Entry(lineSurveyLiquor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LineSurveyLiquorExists(id))
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

        // POST: api/LineSurveyLiquor
        [HttpPost]
        public async Task<ActionResult<LineSurveyLiquor>> PostLineSurveyLiquor(LineSurveyLiquor lineSurveyLiquor)
        {
            _context.LineSurveyLiquors.Add(lineSurveyLiquor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLineSurveyLiquor", new { id = lineSurveyLiquor.Id }, lineSurveyLiquor);
        }

        // DELETE: api/LineSurveyLiquor/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LineSurveyLiquor>> DeleteLineSurveyLiquor(int id)
        {
            var lineSurveyLiquor = await _context.LineSurveyLiquors.FindAsync(id);
            if (lineSurveyLiquor == null)
            {
                return NotFound();
            }

            _context.LineSurveyLiquors.Remove(lineSurveyLiquor);
            await _context.SaveChangesAsync();

            return lineSurveyLiquor;
        }

        private bool LineSurveyLiquorExists(int id)
        {
            return _context.LineSurveyLiquors.Any(e => e.Id == id);
        }
    }
}
