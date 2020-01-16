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
    public class LiquorController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LiquorController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Liquor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Liquor>>> GetLiquors()
        {
            return await _context.Liquors.ToListAsync();
        }

        // GET: api/Liquor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Liquor>> GetLiquor(int id)
        {
            var liquor = await _context.Liquors.FindAsync(id);

            if (liquor == null)
            {
                return NotFound();
            }

            return liquor;
        }

        // PUT: api/Liquor/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLiquor(int id, Liquor liquor)
        {
            if (id != liquor.LiquorId)
            {
                return BadRequest();
            }

            _context.Entry(liquor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LiquorExists(id))
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

        // POST: api/Liquor
        [HttpPost]
        public async Task<ActionResult<Liquor>> PostLiquor(Liquor liquor)
        {
            _context.Liquors.Add(liquor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLiquor", new { id = liquor.LiquorId }, liquor);
        }

        // DELETE: api/Liquor/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Liquor>> DeleteLiquor(int id)
        {
            var liquor = await _context.Liquors.FindAsync(id);
            if (liquor == null)
            {
                return NotFound();
            }

            _context.Liquors.Remove(liquor);
            await _context.SaveChangesAsync();

            return liquor;
        }

        private bool LiquorExists(int id)
        {
            return _context.Liquors.Any(e => e.LiquorId == id);
        }
    }
}
