namespace ag_anchorinfo.Models
{
    public class Location
    {
        public int Id { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string ZipCode { get; set; }

        public string Phone1 { get; set; }

        public string Phone2 { get; set; }

        public int CompanyID { get; set; }

        public int? ProspectiveCustomerId { get; set; }

    }
}