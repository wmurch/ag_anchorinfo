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
    public class BeerController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public BeerController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Beer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Beer>>> GetBeers()
        {
            return await _context.Beers.ToListAsync();
        }

        // GET: api/Beer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Beer>> GetBeer(int id)
        {
            var beer = await _context.Beers.FindAsync(id);

            if (beer == null)
            {
                return NotFound();
            }

            return beer;
        }

        // PUT: api/Beer/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBeer(int id, Beer beer)
        {
            if (id != beer.Id)
            {
                return BadRequest();
            }

            _context.Entry(beer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BeerExists(id))
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

        // POST: api/Beer
        [HttpPost]
        public async Task<ActionResult<Beer>> PostBeer(Beer beer)
        {
            _context.Beers.Add(beer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBeer", new { id = beer.Id }, beer);
        }

        // DELETE: api/Beer/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Beer>> DeleteBeer(int id)
        {
            var beer = await _context.Beers.FindAsync(id);
            if (beer == null)
            {
                return NotFound();
            }

            _context.Beers.Remove(beer);
            await _context.SaveChangesAsync();

            return beer;
        }

        private bool BeerExists(int id)
        {
            return _context.Beers.Any(e => e.Id == id);
        }
    }
}
