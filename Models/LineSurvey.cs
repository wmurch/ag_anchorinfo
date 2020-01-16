using System.Collections.Generic;

namespace ag_anchorinfo.Models
{
    public class LineSurvey
    {
        public int LineSurveyId { get; set; }

        public string SheetNumber { get; set; }

        public string TopNumber { get; set; }

        public string IssueDate { get; set; }

        public string RevisionDate { get; set; }

        public string TechServiceRep { get; set; }

        public string IncomingInspection { get; set; }

        public string LineDesignation { get; set; }

        public string StagedDuration { get; set; }

        public string DePalletizerType { get; set; }

        public string PalletSize { get; set; }

        public int RinserWaterTemp { get; set; }

        public string RinserTwistRotary { get; set; }

        public int FillerSpeed { get; set; }

        public string FillerFillTubeSize { get; set; }

        public int FillerProductTemp { get; set; }

        public string FillerMake { get; set; }

        public string FillerModel { get; set; }

        public string CapperType { get; set; }

        public string CapperMake { get; set; }

        public string CapperModel { get; set; }

        public string Labeler { get; set; }

        public int LabelerAmount { get; set; }

        public string LabelType { get; set; }

        public string LabelerMake { get; set; }
        public string LabelModel { get; set; }

        public bool DudDetector { get; set; }
        public string DudDetectorType { get; set; }

        public bool BottomInspection { get; set; }

        public string BottonInspectionType { get; set; }

        public string CasePackerDrop { get; set; }

        public string CasePackerWrap { get; set; }

        public string LSNotes { get; set; }

        public List<LineSurveyLiquor> LineSurveyLiquors { get; set; }
        public List<LineSurveyFood> LineSurveyFoods { get; set; }

        public List<LineSurveyBeer> LineSurveyBeers { get; set; }

    }
}