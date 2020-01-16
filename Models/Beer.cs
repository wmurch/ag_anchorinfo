using System.Collections.Generic;
namespace ag_anchorinfo.Models
{
    public class Beer
    {
        public int Id { get; set; }

        public string PasturizerMaxTemp { get; set; }

        public List<LineSurveyBeer> LineSurveyBeers { get; set; }

    }
}