import * as React from "react";
import {
  Row,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav
} from "reactstrap";
import { useNewFormControls } from "../api/NewFormControlState";
import { DisplayFormMenu } from "../components/DisplayFormMenu";
import { useService } from "../api/Service";

export const DisplayFiller = () => {
  const {
    showFoodForm,
    showBeerForm,
    showLiquorForm,
    dudDetectorDropDown,
    bottomInspectionDropDown,
    xrayDropDown,
    casePackerDropDown,
    capperTypeDropDown,
    corkerTypeDropDown,
    labelerTypeDropDown,
    typeLabelDropDown,
    showDudDetector,
    setShowDudDetector,
    showBottomInspection,
    setShowBottomInspection,
    showCasePacker,
    setShowCasePacker,
    showXray,
    setShowXray,
    handleDudDetector,
    handleBottomInspection,
    handleXray,
    handleCasePacker,
    handleCapperType,
    handleCorker,
    handleLabeler,
    handleTypeLabel
  } = useNewFormControls();
  const { lineSurvey, createLineSurvey, onChange, handleSubmit } = useService();
  return (
    <>
      <DisplayFormMenu />
      <Form className="text-primary">
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              Filler Speed
              <Input
                readOnly
                plaintext
                name="fillerSpeed"
                id="fillerSpeed"
                value="160/200bpm"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Fill Tube Sz
              <Input
                readOnly
                plaintext
                name="fillerFillTubeSize"
                id="fillerFillTubeSize"
                value="9/16th"
              />
            </Label>
          </Col>
          <Col className="d-flex justify-content-start">
            <Label className="font-weight-bold">
              Filler Prod Temps
              <Input
                readOnly
                plaintext
                name="fillerProductTemps"
                id="fillerProductTemps"
                value="145 degrees"
              />
            </Label>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              Filler Make
              <Input
                readOnly
                plaintext
                name="fillerMake"
                id="fillerMake"
                value="Thermaline"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Filler Model
              <Input
                readOnly
                plaintext
                name="fillerModel"
                id="fillerModel"
                value=""
              />
            </Label>
          </Col>
        </Row>

        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Capper Type
              <Input
                readOnly
                plaintext
                name="capperType"
                id="capperType"
                value="White Cap"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Make
              <Input
                readOnly
                plaintext
                name="capperMake"
                id="capperMake"
                value="Standard"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Model
              <Input
                readOnly
                plaintext
                name="capperModel"
                id="capperModel"
                value={lineSurvey.capperModel}
              />
            </Label>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Labeler Type
              <Input
                readOnly
                plaintext
                name="capperType"
                id="capperType"
                value="Roll Through"
              />
            </Label>
          </Col>

          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              # of Labelers
              <Input
                readOnly
                plaintext
                name="labelerAmount"
                id="labelerAmount"
                value="1"
              />
            </Label>
          </Col>
        </Row>

        <Row>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Label Type
              <Input
                readOnly
                plaintext
                name="labelType"
                id="labelType"
                value="Paper"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Make
              <Input
                readOnly
                plaintext
                name="labelMake"
                id="labelMake"
                value="Langguth"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Model
              <Input
                readOnly
                plaintext
                name="labelModel"
                id="labelModel"
                value=""
              />
            </Label>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              Dud Detect
              <Input
                readOnly
                plaintext
                name="dudDetector"
                id="dudDetector"
                value="no"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Bottom Inspect
              <Input
                readOnly
                plaintext
                name="bottomInspection"
                id="bottomInspection"
                value="no"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">Xray</Label>
            <Input readOnly plaintext name="xray" id="xray" value="Yes" />
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Xray Type
              <Input
                readOnly
                plaintext
                name="xrayType"
                id="xrayType"
                value="CI vision system"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold m-md-1 p-md-2">
              Case Packer
              <Input
                readOnly
                plaintext
                name="casePacker"
                id="casePacker"
                value="Drop"
              />
            </Label>
          </Col>
        </Row>
        <Row form className="mt-2 d-flex justify-content-center">
          <Col>
            <Row form className="d-flex justify-content-center">
              <Col>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Preheat Tunnel Length
                  </Label>
                  <Input
                    readOnly
                    plaintext
                    name="preHeatTunnelLength"
                    id="preHeatTunnelLength"
                    value="N/A"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Preheat Tunnel High Temp
                  </Label>
                  <Input
                    readOnly
                    plaintext
                    name="preHeatTunnelHighTemp"
                    id="preHeatTunnelHighTemp"
                    value="165 Degrees"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row form className="d-flex justify-content-center">
              <Label className="font-weight-bold">Cooler Zones</Label>
            </Row>
            <Row form className="d-flex justify-content-center">
              <Col>
                <Label className="font-weight-bold">
                  CZ 1
                  <Input
                    readOnly
                    plaintext
                    name="coolerZone1"
                    id="coolerZone1"
                    value=""
                  />
                </Label>
              </Col>
              <Col>
                <Label className="font-weight-bold">CZ 2</Label>
                <Input
                  readOnly
                  plaintext
                  name="coolerZone2"
                  id="coolerZone2"
                  value=""
                />
              </Col>
              <Col>
                <Label className="font-weight-bold">CZ 3</Label>

                <Input
                  readOnly
                  plaintext
                  name="coolerZone3"
                  id="coolerZone3"
                  value=""
                />
              </Col>
              <Col>
                <Label className="font-weight-bold">CZ 4</Label>

                <Input
                  readOnly
                  plaintext
                  name="coolerZone4"
                  id="coolerZone4"
                  value="145 Degrees F"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="mt-2 font-weight-bold">
                Other notes about customer's line (ie jam points, bad line flow,
                past problems):
              </Label>
              <p className="border-dark">
                Line set-up is a small and simple design. Depal/all manually
                dumped by hand, belt line into Thermaline machine( nothing
                actually gets pasteurized) enters at 165 degrees and cools
                quickly to bottled at 145 Degrees. Air rinser filler, shaker,
                capper bottle rinser, dryer, accumulation table, labeler, coder,
                line to packer, ci vision system, box coder, automatic
                palletizer. Customer stated as line asjustments are accurate
                they nomrally do not have issues with glass jamming
              </p>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};
