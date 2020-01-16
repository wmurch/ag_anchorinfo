import * as React from "react";
import axios from "axios";

export const useService = () => {
  const [opportunities, setOpportunities] = React.useState([]);
  const [opportunity, setOpportunity] = React.useState("");
  const [showLoading, setShowLoading] = React.useState(false);

  const [lineSurvey, setLineSurvey] = React.useState({
    id: "",
    sheetNumber: "",
    topNumber: "",
    techServRep: "",
    issueDate: "",
    revDate: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    contacts: "",
    name: "",
    phone: "",
    email: "",
    incomingInspection: "",
    lineDesignation: "",
    wareStageDuration: "",
    plasticPalletsUsed: "",
    depalletizerType: "",
    depalletizerModel: "",
    depalletizerPalletSize: "",
    gripperHowMany: "",
    gripperPosition: "",
    bulk: "",
    cases: "",
    layers: "",
    bottlesLayer: "",
    flaps: "",
    finishes: "",
    rinserType: "",
    rinserTwistRotary: "",
    rinserWaterTemp: "",
    numberOfStraps: "",
    tierSheets: "",
    palletTagLocation: "",
    solidDecksAllowable: "",
    fillerSpeed: "",
    fillerFillTubeSize: "",
    fillerProductTemps: "",
    fillerMake: "",
    fillerModel: "",
    capperType: "",
    capperMake: "",
    capperModel: "",
    corkerType: "",
    corkerDiameter: "",
    corkerLength: "",
    labelerType: "",
    labelerModel: "",
    labelerAmount: "",
    labelType: "",
    labelMake: "",
    labelModel: "",
    dudDetector: "",
    dudDetectorType: "",
    bottomInspection: "",
    bottomInspectionType: "",
    xray: "",
    xrayType: "",
    casePacker: "",
    casePackerWrap: "",
    preHeatTunnelLength: "",
    preHeatTunnelHighTemp: "",
    pasturizerProductMaxTemp: "",
    lsNotes: ""
  });
  const [data, setData] = React.useState({
    sheetNumber: lineSurvey.sheetNumber,
    topNumber: lineSurvey.topNumber,
    techServRep: lineSurvey.techServRep,
    issueDate: lineSurvey.issueDate,
    revDate: lineSurvey.revDate,
    companyName: lineSurvey.companyName,
    address: lineSurvey.address,
    city: lineSurvey.city,
    state: lineSurvey.state,
    zip: lineSurvey.zip,
    contacts: lineSurvey.contacts,
    name: lineSurvey.name,
    phone: lineSurvey.phone,
    email: lineSurvey.email,
    incomingInspection: lineSurvey.incomingInspection,
    lineDesignation: lineSurvey.lineDesignation,
    wareStageDuration: lineSurvey.wareStageDuration,
    plasticPalletsUsed: lineSurvey.plasticPalletsUsed,
    depalletizerType: lineSurvey.depalletizerType,
    depalletizerModel: lineSurvey.depalletizerModel,
    depalletizerPalletSize: lineSurvey.depalletizerPalletSize,
    gripperHowMany: lineSurvey.gripperHowMany,
    gripperPosition: lineSurvey.gripperPosition,
    bulk: lineSurvey.bulk,
    cases: lineSurvey.cases,
    layers: lineSurvey.layers,
    bottlesLayer: lineSurvey.bottlesLayer,
    flaps: lineSurvey.flaps,
    finishes: lineSurvey.finishes,
    rinserType: lineSurvey.rinserType,
    rinserTwistRotary: lineSurvey.rinserTwistRotary,
    rinserWaterTemp: lineSurvey.rinserWaterTemp,
    numberOfStraps: lineSurvey.numberOfStraps,
    tierSheets: lineSurvey.tierSheets,
    palletTagLocation: lineSurvey.palletTagLocation,
    solidDecksAllowable: lineSurvey.solidDecksAllowable,
    fillerSpeed: lineSurvey.fillerSpeed,
    fillerFillTubeSize: lineSurvey.fillerFillTubeSize,
    fillerProductTemps: lineSurvey.fillerProductTemps,
    fillerMake: lineSurvey.fillerMake,
    fillerModel: lineSurvey.fillerModel,
    capperType: lineSurvey.capperType,
    capperMake: lineSurvey.capperMake,
    capperModel: lineSurvey.capperModel,
    corkerType: lineSurvey.corkerType,
    corkerDiameter: lineSurvey.corkerDiameter,
    corkerLength: lineSurvey.corkerLength,
    labelerType: lineSurvey.labelerType,
    labelerModel: lineSurvey.labelerModel,
    labelerAmount: lineSurvey.labelerAmount,
    labelType: lineSurvey.labelType,
    labelMake: lineSurvey.labelMake,
    labelModel: lineSurvey.labelModel,
    dudDetector: lineSurvey.dudDetector,
    dudDetectorType: lineSurvey.dudDetectorType,
    bottomInspection: lineSurvey.bottomInspection,
    bottomInspectionType: lineSurvey.bottomInspectionType,
    xray: lineSurvey.xray,
    xrayType: lineSurvey.xrayType,
    casePacker: lineSurvey.casePacker,
    casePackerWrap: lineSurvey.casePackerWrap,
    preHeatTunnelLength: lineSurvey.preHeatTunnelLength,
    preHeatTunnelHighTemp: lineSurvey.preHeatTunnelHighTemp,
    pasturizerProductMaxTemp: lineSurvey.pasturizerProductMaxTemp,
    lsNotes: lineSurvey.lsNotes
  });

  const onChange = e => {
    setLineSurvey({ ...lineSurvey, [e.target.name]: e.target.value });
    console.log({ lineSurvey });
  };

  const sfConnect =
    "https://na136.salesforce.com/services/data/v37.0/parameterizedSearch/?q=";

  const lsConnect = "https://localhost:5001/api/LineSurvey";

  const createLineSurvey = async () => {
    await axios.post(lsConnect, { data }).then(results => {
      setShowLoading(false);
      setLineSurvey({
        id: "",
        sheetNumber: "",
        topNumber: "",
        techServRep: "",
        issueDate: "",
        revDate: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        contacts: "",
        name: "",
        phone: "",
        email: "",
        incomingInspection: "",
        lineDesignation: "",
        wareStageDuration: "",
        plasticPalletsUsed: "",
        depalletizerType: "",
        depalletizerModel: "",
        depalletizerPalletSize: "",
        gripperHowMany: "",
        gripperPosition: "",
        bulk: "",
        cases: "",
        layers: "",
        bottlesLayer: "",
        flaps: "",
        finishes: "",
        rinserType: "",
        rinserTwistRotary: "",
        rinserWaterTemp: "",
        numberOfStraps: "",
        tierSheets: "",
        palletTagLocation: "",
        solidDecksAllowable: "",
        fillerSpeed: "",
        fillerFillTubeSize: "",
        fillerProductTemps: "",
        fillerMake: "",
        fillerModel: "",
        capperType: "",
        capperMake: "",
        capperModel: "",
        corkerType: "",
        corkerDiameter: "",
        corkerLength: "",
        labelerType: "",
        labelerModel: "",
        labelerAmount: "",
        labelType: "",
        labelMake: "",
        labelModel: "",
        dudDetector: "",
        dudDetectorType: "",
        bottomInspection: "",
        bottomInspectionType: "",
        xray: "",
        xrayType: "",
        casePacker: "",
        casePackerWrap: "",
        preHeatTunnelLength: "",
        preHeatTunnelHighTemp: "",
        pasturizerProductMaxTemp: "",
        lsNotes: ""
      });
      console.log("i hope this is working");
    });
  };

  const updateField = e => {
    setOpportunity(e.target.value);
    console.log(opportunity);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return {
    opportunities,
    setOpportunities,
    opportunity,
    setOpportunity,
    updateField,
    data,
    setData,
    showLoading,
    setShowLoading,
    lineSurvey,
    setLineSurvey,
    createLineSurvey,
    onChange,
    handleSubmit
  };
};