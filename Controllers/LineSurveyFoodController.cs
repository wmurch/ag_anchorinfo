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
    public class LineSurveyFoodController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LineSurveyFoodController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LineSurveyFood
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LineSurveyFood>>> GetLineSurveyFoods()
        {
            return await _context.LineSurveyFoods.ToListAsync();
        }

        // GET: api/LineSurveyFood/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LineSurveyFood>> GetLineSurveyFood(int id)
        {
            var lineSurveyFood = await _context.LineSurveyFoods.FindAsync(id);

            if (lineSurveyFood == null)
            {
                return NotFound();
            }

            return lineSurveyFood;
        }

        // PUT: api/LineSurveyFood/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLineSurveyFood(int id, LineSurveyFood lineSurveyFood)
        {
            if (id != lineSurveyFood.Id)
            {
                return BadRequest();
            }

            _context.Entry(lineSurveyFood).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LineSurveyFoodExists(id))
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

        // POST: api/LineSurveyFood
        [HttpPost]
        public async Task<ActionResult<LineSurveyFood>> PostLineSurveyFood(LineSurveyFood lineSurveyFood)
        {
            _context.LineSurveyFoods.Add(lineSurveyFood);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLineSurveyFood", new { id = lineSurveyFood.Id }, lineSurveyFood);
        }

        // DELETE: api/LineSurveyFood/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LineSurveyFood>> DeleteLineSurveyFood(int id)
        {
            var lineSurveyFood = await _context.LineSurveyFoods.FindAsync(id);
            if (lineSurveyFood == null)
            {
                return NotFound();
            }

            _context.LineSurveyFoods.Remove(lineSurveyFood);
            await _context.SaveChangesAsync();

            return lineSurveyFood;
        }

        private bool LineSurveyFoodExists(int id)
        {
            return _context.LineSurveyFoods.Any(e => e.Id == id);
        }
    }
}
