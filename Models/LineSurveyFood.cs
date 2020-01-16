using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ag_anchorinfo.Models
{
    public class LineSurveyFood
    {


        public int LineSurveyId { get; set; }


        public LineSurvey LineSurvey { get; set; }
        public int FoodId { get; set; }

        public Food Food { get; set; }

    }
}