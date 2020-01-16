import * as React from 'react';
import { useNewFormControls } from "../api/NewFormControlState";
export const NewLineSurvey = () => {
    const {
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
      handleToggleClick
    } = useNewFormControls();

const EquipmentVerification = () => {
    return (
        <div>
            Here is where equipment info will be
        </div>
    );
}

export default EquipmentVerification;
