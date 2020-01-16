
namespace ag_anchorinfo.Models
{
    public class LineSurveyBeer
    {


        public int LineSurveyId { get; set; }
        public LineSurvey LineSurvey { get; set; }
        public int BeerId { get; set; }

        public Beer Beer { get; set; }

    }
}