using System.Collections.Generic;
namespace ag_anchorinfo.Models
{
    public class Food
    {
        public int FoodId { get; set; }

        public string PreHeatTunnelLength { get; set; }

        public string PreHeatTunnelHighTemp { get; set; }

        public string CoolerZone1 { get; set; }

        public string CoolerZone2 { get; set; }

        public string CoolerZone3 { get; set; }

        public string CoolerZone4 { get; set; }
        public List<LineSurveyFood> LineSurveyFoods { get; set; }

    }
}