

namespace ag_anchorinfo.Models
{
    public class LineSurveyLiquor
    {
        public int LineSurveyId { get; set; }

        public LineSurvey LineSurvey { get; set; }
        public int LiquorId { get; set; }

        public Liquor Liquor { get; set; }

    }
}