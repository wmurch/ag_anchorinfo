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
    public class ProspectiveCustomerController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ProspectiveCustomerController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ProspectiveCustomer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProspectiveCustomer>>> GetProspectiveCustomers()
        {
            return await _context.ProspectiveCustomers.ToListAsync();
        }

        // GET: api/ProspectiveCustomer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProspectiveCustomer>> GetProspectiveCustomer(int id)
        {
            var prospectiveCustomer = await _context.ProspectiveCustomers.FindAsync(id);

            if (prospectiveCustomer == null)
            {
                return NotFound();
            }

            return prospectiveCustomer;
        }

        // PUT: api/ProspectiveCustomer/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProspectiveCustomer(int id, ProspectiveCustomer prospectiveCustomer)
        {
            if (id != prospectiveCustomer.Id)
            {
                return BadRequest();
            }

            _context.Entry(prospectiveCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProspectiveCustomerExists(id))
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

        // POST: api/ProspectiveCustomer
        [HttpPost]
        public async Task<ActionResult<ProspectiveCustomer>> PostProspectiveCustomer(ProspectiveCustomer prospectiveCustomer)
        {
            _context.ProspectiveCustomers.Add(prospectiveCustomer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProspectiveCustomer", new { id = prospectiveCustomer.Id }, prospectiveCustomer);
        }

        // DELETE: api/ProspectiveCustomer/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProspectiveCustomer>> DeleteProspectiveCustomer(int id)
        {
            var prospectiveCustomer = await _context.ProspectiveCustomers.FindAsync(id);
            if (prospectiveCustomer == null)
            {
                return NotFound();
            }

            _context.ProspectiveCustomers.Remove(prospectiveCustomer);
            await _context.SaveChangesAsync();

            return prospectiveCustomer;
        }

        private bool ProspectiveCustomerExists(int id)
        {
            return _context.ProspectiveCustomers.Any(e => e.Id == id);
        }
    }
}
