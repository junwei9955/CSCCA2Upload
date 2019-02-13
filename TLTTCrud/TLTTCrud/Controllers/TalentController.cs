using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TLTTCrud.Models;
using System.Web.Http.Cors;
using System.Collections;
using System.Net.Mail;
using System.Text;

namespace TLTTCrud.Controllers
{
    [EnableCors(origins: "http://localhost:4200",headers:"*",methods:"*")]
    public class TalentController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Talent
        [HttpGet]
        [Route("api/Talent")]
        [AllowAnonymous]
        public IQueryable<Talent> GetTalents()
        {
            IQueryable<Talent> talents = null;
            List<Talent> talentList = new List<Talent>();
            foreach (Talent t in db.Talents.Where(i => i.Status == 1))
            {
                talentList.Add(t);
            }
            if (talentList == null)
            {
                return null;
            }
            talents = talentList.AsQueryable();
            return talents;
        }

        [HttpGet]
        [Route("api/TalentsByUserId")]
        [AllowAnonymous]
        public IQueryable<Talent> GetTalentsByUserId(string id)
        {
            IQueryable<Talent> talents = null;
            List<Talent> talentList = new List<Talent>();
            foreach (Talent t in db.Talents.Where(i => i.UserId == id))
            {
                talentList.Add(t);
            }
            if(talentList == null)
            {
                return null;
            }
            talents = talentList.AsQueryable();
            return talents;
        }

        // GET: api/Talent/5
        [ResponseType(typeof(Talent))]
        public IHttpActionResult GetTalent(int id)
        {
            Talent talent = db.Talents.Find(id);
            if (talent == null)
            {
                return NotFound();
            }
            return Ok(talent);
        }


        [HttpPut]
        [Route("api/Talent")]
        [AllowAnonymous]
        public IHttpActionResult PutTalents(int id, Talent talent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != talent.TalentId)
            {
                return BadRequest();
            }

            db.Entry(talent).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TalentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // PUT: api/Talent/5
        [ResponseType(typeof(Talent))]
        public IHttpActionResult PutTalent(int id, Talent talent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != talent.TalentId)
            {
                return BadRequest();
            }

            db.Entry(talent).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TalentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpPost]
        [Route("api/Talent")]
        [AllowAnonymous]
        public HttpResponseMessage PostTalents(Talent talent)
        {
            db.Talents.Add(talent);
            db.SaveChanges();

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "ok");
            return response;

        }
        // POST: api/Talent
        [ResponseType(typeof(Talent))]
        public HttpResponseMessage PostTalent(Talent talent)
        {
            db.Talents.Add(talent);
            db.SaveChanges();

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "value");
            return response;
        }

        

        // DELETE: api/Talent/5
        [ResponseType(typeof(Talent))]
        public IHttpActionResult DeleteTalent(int id)
        {
            Talent talent = db.Talents.Find(id);
            if (talent == null)
            {
                return NotFound();
            }

            db.Talents.Remove(talent);
            db.SaveChanges();

            return Ok(talent);
        }

        [HttpDelete]
        [Route("api/Talent")]
        [AllowAnonymous]
        public IHttpActionResult DeleteTalents(int id)
        {
            Talent talent = db.Talents.Find(id);
            if (talent == null)
            {
                return NotFound();
            }

            db.Talents.Remove(talent);
            db.SaveChanges();

            return Ok(talent);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TalentExists(int id)
        {
            return db.Talents.Count(e => e.TalentId == id) > 0;
        }


    }
}