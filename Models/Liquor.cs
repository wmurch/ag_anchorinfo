using System.Collections.Generic;
namespace ag_anchorinfo.Models
{
    public class Liquor
    {
        public int LiquorId { get; set; }

        public string CorkerType { get; set; }

        public string CorkerDiameter { get; set; }

        public string CorkerLength { get; set; }
        public List<LineSurveyLiquor> LineSurveyLiquors { get; set; }

    }
}