using Microsoft.EntityFrameworkCore.Migrations;

namespace ag_anchorinfo.Migrations
{
    public partial class updateColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LSBeerNotes",
                table: "LineSurveyBeers");

            migrationBuilder.RenameColumn(
                name: "Responsibility",
                table: "LineSurveys",
                newName: "TechServiceRep");

            migrationBuilder.RenameColumn(
                name: "LSFoodNotes",
                table: "LineSurveys",
                newName: "LSNotes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TechServiceRep",
                table: "LineSurveys",
                newName: "Responsibility");

            migrationBuilder.RenameColumn(
                name: "LSNotes",
                table: "LineSurveys",
                newName: "LSFoodNotes");

            migrationBuilder.AddColumn<string>(
                name: "LSBeerNotes",
                table: "LineSurveyBeers",
                nullable: true);
        }
    }
}
