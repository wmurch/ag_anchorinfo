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
import { FormMenu } from "./FormMenu";
import { useService } from "../api/Service";
export const NewFiller = () => {
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
      <FormMenu />
      <Form
        className="text-primary"
        onSubmit={e => {
          createLineSurvey({ lineSurvey });
          {
            handleSubmit(e);
          }
        }}
      >
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Label className="font-weight-bold m-md-1 p-md-2">Filler:</Label>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Speed"
                name="fillerSpeed"
                id="fillerSpeed"
                value={lineSurvey.fillerSpeed}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Tube Size"
                name="fillerFillTubeSize"
                id="fillerFillTubeSize"
                value={lineSurvey.fillerFillTubeSize}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Prod Temp"
                name="fillerProductTemps"
                id="fillerProductTemps"
                value={lineSurvey.fillerProductTemps}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Make"
                name="fillerMake"
                id="fillerMake"
                value={lineSurvey.fillerMake}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Model"
                name="fillerModel"
                id="fillerModel"
                value={lineSurvey.fillerModel}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Label className="font-weight-bold m-md-1 p-md-2">Capper</Label>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={capperTypeDropDown} toggle={handleCapperType}>
              <DropdownToggle caret color="primary">
                Type
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="capperType"
                  value={lineSurvey.capperType}
                  onClick={onChange}
                >
                  White Cap
                </DropdownItem>
                <DropdownItem
                  name="capperType"
                  value={lineSurvey.capperType}
                  onClick={onChange}
                >
                  Alcoa
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Make"
                name="capperMake"
                id="capperMake"
                value={lineSurvey.capperMake}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Model"
                name="capperModel"
                id="capperModel"
                value={lineSurvey.capperModel}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        {showLiquorForm && (
          <>
            <Row form className="mt-2 d-flex justify-content-center">
              <Label className="font-weight-bold m-md-1 p-md-2">Corker</Label>
            </Row>
            <Row form className="mt-2 d-flex justify-content-center">
              <Col sm="2">
                <Dropdown isOpen={corkerTypeDropDown} toggle={handleCorker}>
                  <DropdownToggle caret color="primary">
                    Type
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      name="corkerType"
                      value={lineSurvey.corkerType}
                      onClick={onChange}
                    >
                      Plastic
                    </DropdownItem>
                    <DropdownItem>Cork</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Diameter"
                    name="corkerDiameter"
                    id="corkerDiameter"
                    value={lineSurvey.corkerDiameter}
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Length"
                    name="corkerLength"
                    id="corkerLength"
                    value={lineSurvey.corkerLength}
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </>
        )}

        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Label className="font-weight-bold m-md-1 p-md-2">labeler</Label>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={labelerTypeDropDown} toggle={handleLabeler}>
              <DropdownToggle caret color="primary">
                Type
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="labelerType"
                  value={lineSurvey.labelerType}
                  onClick={onChange}
                >
                  Rotary
                </DropdownItem>
                <DropdownItem>Roll Through</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Model"
                name="labelerModel"
                id="labelerModel"
                value={lineSurvey.labelerModel}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Amount"
                name="labelerAmount"
                id="labelerAmount"
                value={lineSurvey.labelerAmount}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Label className="font-weight-bold m-md-1 p-md-2">label</Label>
        </Row>
        <Row>
          <Col>
            <Dropdown isOpen={typeLabelDropDown} toggle={handleTypeLabel}>
              <DropdownToggle caret color="primary">
                Type
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="labelType"
                  value={lineSurvey.labelerType}
                  onClick={onChange}
                >
                  Paper
                </DropdownItem>
                <DropdownItem
                  name="labelType"
                  value={lineSurvey.labelerType}
                  onClick={onChange}
                >
                  Pressure Sensitive
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Make"
                name="labelMake"
                id="labelMake"
                value={lineSurvey.labelMake}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Model"
                name="labelModel"
                id="labelModel"
                value={lineSurvey.labelModel}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={dudDetectorDropDown} toggle={handleDudDetector}>
              <DropdownToggle caret color="primary" className="w-75">
                Dud Detector
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="dudDetector"
                  value={lineSurvey.dudDetector}
                  onClick={() => {
                    setShowDudDetector(false);
                  }}
                  {...onChange}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  name="dudDetectorType"
                  value={lineSurvey.dudDetectorType}
                  onClick={() => {
                    setShowDudDetector(true);
                  }}
                  {...onChange}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {showDudDetector && (
              <FormGroup className="mt-2 d-flex justification-content-center flex-md-column">
                <Col>
                  <Label className="font-weight-bold">
                    Type
                    <Input
                      className="mt-1"
                      type="text"
                      name="dudDetectorType"
                      id="dudDetectorType"
                      value={lineSurvey.dudDetectorType}
                      onChange={onChange}
                    />
                  </Label>
                </Col>
              </FormGroup>
            )}
          </Col>
          <Col>
            <Dropdown
              isOpen={bottomInspectionDropDown}
              toggle={handleBottomInspection}
            >
              <DropdownToggle caret color="primary">
                Bottom Inspection
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="bottomInspection"
                  value={lineSurvey.bottomInspection}
                  onClick={() => {
                    setShowBottomInspection(false);
                  }}
                  {...onChange}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  name="bottomInspection"
                  value={lineSurvey.bottomInspection}
                  onClick={() => {
                    setShowBottomInspection(true);
                  }}
                  {...onChange}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {showBottomInspection && (
              <FormGroup className="mt-2 d-flex justification-content-center flex-md-column">
                <Col>
                  <Label className="font-weight-bold">
                    Type
                    <Input
                      className="mt-1"
                      type="text"
                      name="bottomInspectionType"
                      id="bottomInspectionType"
                      value={lineSurvey.bottomInspectionType}
                      onChange={onChange}
                    />
                  </Label>
                </Col>
              </FormGroup>
            )}
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={xrayDropDown} toggle={handleXray}>
              <DropdownToggle caret color="primary">
                Xray
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="bottomInspection"
                  value={lineSurvey.bottomInspection}
                  onClick={() => {
                    setShowXray(false);
                  }}
                  {...onChange}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setShowXray(true);
                  }}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {showXray && (
              <FormGroup className="mt-2 d-flex justification-content-center flex-md-column">
                <Col>
                  <Label className="font-weight-bold">
                    Type
                    <Input className="mt-1" type="text" />
                  </Label>
                </Col>
              </FormGroup>
            )}
          </Col>
          <Col>
            <Dropdown isOpen={casePackerDropDown} toggle={handleCasePacker}>
              <DropdownToggle caret color="primary">
                Case Packer
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    setShowCasePacker(false);
                  }}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setShowCasePacker(true);
                  }}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {showCasePacker && (
              <FormGroup className="mt-2 d-flex justification-content-center flex-md-column">
                <Col>
                  <Label className="font-weight-bold">
                    Type
                    <Input className="mt-1" type="text" />
                  </Label>
                </Col>
              </FormGroup>
            )}
          </Col>
        </Row>
        {showFoodForm && (
          <Row form className="mt-2 d-flex justify-content-center">
            <Col>
              <Row form className="d-flex justify-content-center">
                <Label className="font-weight-bold">Preheat Tunnel</Label>
              </Row>
              <Row form className="d-flex justify-content-center">
                <Col>
                  <FormGroup>
                    <Input type="text" placeholder="Length" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Input type="text" placeholder="High Temp" />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row form className="d-flex justify-content-center">
                <Label className="font-weight-bold">Cooler Zones</Label>
              </Row>
              <Row form className="d-flex justify-content-center">
                <Col>
                  <FormGroup>
                    <Input type="text" placeholder="1" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Input type="text" placeholder="2" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Input type="text" placeholder="3" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Input type="text" placeholder="4" />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <Row form className="d-flex justify-content-center">
          {showBeerForm && (
            <Col>
              <FormGroup className="d-flex flex-column align-items-md-start">
                <Label className="mt-2 mb-4 font-weight-bold">
                  Pasteurizer
                </Label>
                <Input type="text" placeholder="Product Max Temp" />
                <FormText color="muted">
                  Note: Temperatures should not exceed 147 Deg F
                </FormText>
              </FormGroup>
            </Col>
          )}
          <Col>
            <FormGroup>
              <Label className="mt-2 font-weight-bold">
                Other notes about customer's line (ie jam points, bad line flow,
                past problems):
                <Input type="textarea" />
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-3 mr-1 d-flex justify-content-end">
          <Button color="primary" type="submit" size="lg">
            Create New Line Survey
          </Button>
        </Row>
      </Form>
    </>
  );
};
