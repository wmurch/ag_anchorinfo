﻿using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace ag_anchorinfo.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Beers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    PasturizerMaxTemp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Beers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Foods",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    PreHeatTunnelLength = table.Column<string>(nullable: true),
                    PreHeatTunnelHighTemp = table.Column<string>(nullable: true),
                    CoolerZone1 = table.Column<string>(nullable: true),
                    CoolerZone2 = table.Column<string>(nullable: true),
                    CoolerZone3 = table.Column<string>(nullable: true),
                    CoolerZone4 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Foods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LineSurveys",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    SheetNumber = table.Column<string>(nullable: true),
                    TopNumber = table.Column<string>(nullable: true),
                    IssueDate = table.Column<string>(nullable: true),
                    RevisionDate = table.Column<string>(nullable: true),
                    TechServiceRep = table.Column<string>(nullable: true),
                    IncomingInspection = table.Column<string>(nullable: true),
                    LineDesignation = table.Column<string>(nullable: true),
                    StagedDuration = table.Column<string>(nullable: true),
                    DePalletizerType = table.Column<string>(nullable: true),
                    PalletSize = table.Column<string>(nullable: true),
                    RinserWaterTemp = table.Column<int>(nullable: false),
                    RinserTwistRotary = table.Column<string>(nullable: true),
                    FillerSpeed = table.Column<int>(nullable: false),
                    FillerFillTubeSize = table.Column<string>(nullable: true),
                    FillerProductTemp = table.Column<int>(nullable: false),
                    FillerMake = table.Column<string>(nullable: true),
                    FillerModel = table.Column<string>(nullable: true),
                    CapperType = table.Column<string>(nullable: true),
                    CapperMake = table.Column<string>(nullable: true),
                    CapperModel = table.Column<string>(nullable: true),
                    Labeler = table.Column<string>(nullable: true),
                    LabelerAmount = table.Column<int>(nullable: false),
                    LabelType = table.Column<string>(nullable: true),
                    LabelerMake = table.Column<string>(nullable: true),
                    LabelModel = table.Column<string>(nullable: true),
                    DudDetector = table.Column<bool>(nullable: false),
                    DudDetectorType = table.Column<string>(nullable: true),
                    BottomInspection = table.Column<bool>(nullable: false),
                    BottonInspectionType = table.Column<string>(nullable: true),
                    CasePackerDrop = table.Column<string>(nullable: true),
                    CasePackerWrap = table.Column<string>(nullable: true),
                    LSNotes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LineSurveys", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Liquors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CorkerType = table.Column<string>(nullable: true),
                    CorkerDiameter = table.Column<string>(nullable: true),
                    CorkerLength = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Liquors", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Beers");

            migrationBuilder.DropTable(
                name: "Foods");

            migrationBuilder.DropTable(
                name: "LineSurveys");

            migrationBuilder.DropTable(
                name: "Liquors");
        }
    }
}