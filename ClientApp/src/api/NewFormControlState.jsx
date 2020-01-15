import * as React from "react";

export const useNewFormControls = () => {
  const [showFoodForm, setShowFoodForm] = React.useState(false);
  const [showBeerForm, setShowBeerForm] = React.useState(false);
  const [showLiquorForm, setShowLiquorForm] = React.useState(false);
  const [newLineSurveySubmitted, setNewLineSurveySubmitted] = React.useState(
    false
  );
  const [showFormButtons, setShowFormButtons] = React.useState(true);
  const [rinserType, setRinserType] = React.useState("");
  const [showRinserAir, setShowRinserAir] = React.useState(false);
  const [showRinserWater, setShowRinserWater] = React.useState(false);
  const [rinserDropDown, setRinserDropDown] = React.useState(false);
  const [dudDetectorDropDown, setDudDetectorDropDown] = React.useState(false);
  const [showDudDetector, setShowDudDetector] = React.useState(false);
  const [showBottomInspection, setShowBottomInspection] = React.useState(false);
  const [showXray, setShowXray] = React.useState(false);
  const [showCasePacker, setShowCasePacker] = React.useState(false);
  const [
    bottomInspectionDropDown,
    setBottomInspectionDropDown
  ] = React.useState(false);
  const [xrayDropDown, setXrayDropDown] = React.useState(false);
  const [capperType, setCapperType] = React.useState(false);
  const [casePackerDropDown, setCasePackerDropDown] = React.useState(false);
  const [incomingInspDropDown, setIncomingInspDropDown] = React.useState(false);
  const [flapsDropDown, setFlapsDropDown] = React.useState(false);
  const [finishDropDown, setFinishDropDown] = React.useState(false);
  const [tierSheetsDropDown, setTierSheetsDropDown] = React.useState(false);
  const [solidDecksAllowDropDown, setSolidDecksAllowDropDown] = React.useState(
    false
  );
  const [capperTypeDropDown, setCapperTypeDropDown] = React.useState(false);
  const [corkerTypeDropDown, setCorkerTypeDropDown] = React.useState(false);
  const [labelerTypeDropDown, setLabelerTypeDropDown] = React.useState(false);
  const [typeLabelDropDown, setTypeLabelDropDown] = React.useState(false);

  const handleToggleClick = () => {
    setNewLineSurveySubmitted(true);
    setShowFormButtons(false);
  };

  const handleRinserType = () => setRinserDropDown(prevState => !prevState);
  const handleDudDetector = () =>
    setDudDetectorDropDown(prevState => !prevState);
  const handleBottomInspection = () =>
    setBottomInspectionDropDown(prevState => !prevState);
  const handleXray = () => setXrayDropDown(prevState => !prevState);
  const handleCasePacker = () => setCasePackerDropDown(prevState => !prevState);
  const handleIncomingInsp = () =>
    setIncomingInspDropDown(prevState => !prevState);
  const handleFlaps = () => setFlapsDropDown(prevState => !prevState);
  const handleFinish = () => setFinishDropDown(prevState => !prevState);
  const handleTierSheets = () => setTierSheetsDropDown(prevState => !prevState);
  const handleSolidDecks = () =>
    setSolidDecksAllowDropDown(prevState => !prevState);
  const handleCapperType = () => setCapperTypeDropDown(prevState => !prevState);
  const handleCorker = () => setCorkerTypeDropDown(prevState => !prevState);
  const handleLabeler = () => setLabelerTypeDropDown(prevState => !prevState);
  const handleTypeLabel = () => setTypeLabelDropDown(prevState => !prevState);

  return {
    showFoodForm,
    setShowFoodForm,
    showBeerForm,
    setShowBeerForm,
    showLiquorForm,
    setShowLiquorForm,
    newLineSurveySubmitted,
    setNewLineSurveySubmitted,
    showFormButtons,
    setShowFormButtons,
    rinserType,
    setRinserType,
    showRinserWater,
    setShowRinserWater,
    showRinserAir,
    setShowRinserAir,
    rinserDropDown,
    setRinserDropDown,
    dudDetectorDropDown,
    setDudDetectorDropDown,
    bottomInspectionDropDown,
    setBottomInspectionDropDown,
    xrayDropDown,
    setXrayDropDown,
    casePackerDropDown,
    setCasePackerDropDown,
    incomingInspDropDown,
    setIncomingInspDropDown,
    flapsDropDown,
    setFlapsDropDown,
    finishDropDown,
    setFinishDropDown,
    tierSheetsDropDown,
    setTierSheetsDropDown,
    solidDecksAllowDropDown,
    setSolidDecksAllowDropDown,
    capperTypeDropDown,
    setCapperTypeDropDown,
    corkerTypeDropDown,
    setCorkerTypeDropDown,
    labelerTypeDropDown,
    setLabelerTypeDropDown,
    typeLabelDropDown,
    setTypeLabelDropDown,
    showDudDetector,
    setShowDudDetector,
    showBottomInspection,
    setShowBottomInspection,
    showCasePacker,
    setShowCasePacker,
    showXray,
    setShowXray,
    capperType,
    setCapperType,
    handleToggleClick,
    handleRinserType,
    handleDudDetector,
    handleBottomInspection,
    handleXray,
    handleCasePacker,
    handleIncomingInsp,
    handleFlaps,
    handleFinish,
    handleTierSheets,
    handleSolidDecks,
    handleCapperType,
    handleCorker,
    handleLabeler,
    handleTypeLabel
  };
};
