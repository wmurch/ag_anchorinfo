using Microsoft.EntityFrameworkCore.Migrations;

namespace ag_anchorinfo.Migrations
{
    public partial class moreModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Foods",
                newName: "FoodId");

            migrationBuilder.CreateTable(
                name: "LineSurveyBeer",
                columns: table => new
                {
                    LineSurveyId = table.Column<int>(nullable: false),
                    BeerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LineSurveyBeer", x => new { x.LineSurveyId, x.BeerId });
                    table.ForeignKey(
                        name: "FK_LineSurveyBeer_Beers_BeerId",
                        column: x => x.BeerId,
                        principalTable: "Beers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LineSurveyBeer_LineSurveys_LineSurveyId",
                        column: x => x.LineSurveyId,
                        principalTable: "LineSurveys",
                        principalColumn: "LineSurveyId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LineSurveyFood",
                columns: table => new
                {
                    LineSurveyId = table.Column<int>(nullable: false),
                    FoodId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LineSurveyFood", x => new { x.LineSurveyId, x.FoodId });
                    table.ForeignKey(
                        name: "FK_LineSurveyFood_Foods_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Foods",
                        principalColumn: "FoodId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LineSurveyFood_LineSurveys_LineSurveyId",
                        column: x => x.LineSurveyId,
                        principalTable: "LineSurveys",
                        principalColumn: "LineSurveyId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LineSurveyBeer_BeerId",
                table: "LineSurveyBeer",
                column: "BeerId");

            migrationBuilder.CreateIndex(
                name: "IX_LineSurveyFood_FoodId",
                table: "LineSurveyFood",
                column: "FoodId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LineSurveyBeer");

            migrationBuilder.DropTable(
                name: "LineSurveyFood");

            migrationBuilder.RenameColumn(
                name: "FoodId",
                table: "Foods",
                newName: "Id");
        }
    }
}
