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
export const Depallitizer = () => {
  const {
    showRinserWater,
    setShowRinserWater,
    showRinserAir,
    setShowRinserAir,
    rinserDropDown,
    incomingInspDropDown,
    flapsDropDown,
    finishDropDown,
    tierSheetsDropDown,
    solidDecksAllowDropDown,
    handleRinserType,
    handleIncomingInsp,
    handleFlaps,
    handleFinish,
    handleTierSheets,
    handleSolidDecks
  } = useNewFormControls();
  const {
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
  } = useService();
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
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={incomingInspDropDown} toggle={handleIncomingInsp}>
              <DropdownToggle caret color="primary">
                Inspection?
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="incomingInspection"
                  value={lineSurvey.incomingInspection}
                  onClick={onChange}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  name="incomingInspection"
                  value={lineSurvey.incomingInspection}
                  onClick={onChange}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown isOpen={incomingInspDropDown} toggle={handleIncomingInsp}>
              <DropdownToggle caret color="primary">
                Plastic Pallets Used?
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="plasticPalletsUsed"
                  value={lineSurvey.plasticPalletsUsed}
                  onClick={onChange}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  name="plasticPalletsUsed"
                  value={lineSurvey.plasticPalletsUsed}
                  onClick={onChange}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Col>
                <Input
                  type="text"
                  placeholder="Line Designation"
                  name="lineDesignation"
                  id="lineDesignation"
                  value={lineSurvey.lineDesignation}
                  onChange={onChange}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Col sm="auto">
                <Input
                  type="text"
                  placeholder="Ware stage duration"
                  name="wareStageDuration"
                  id="wareStageDuration"
                  value={lineSurvey.wareStageDuration}
                  onChange={onChange}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="d-flex justify-content-center">
          <Label className="font-weight-bold">Depalletizer</Label>
        </Row>
        <Row form className="d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Type"
                name="depalletizerType"
                id="depalletizerType"
                value={lineSurvey.depalletizerType}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Model"
                name="depalletizerModel"
                id="depalletizerModel"
                value={lineSurvey.depalletizerModel}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Pallet Size"
                name="depalletizerPalletSize"
                id="depalletizerPalletSize"
                value={lineSurvey.depalletizerPalletSize}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="d-flex justify-content-center">
          <Label className="font-weight-bold">Gripper</Label>
        </Row>
        <Row form className="d-flex justify-content-center">
          <Col>
            <Input
              type="text"
              placeholder="How many"
              name="gripperHowMany"
              id="gripperHowMany"
              value={lineSurvey.gripperHowMany}
              onChange={onChange}
            />
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Position"
              name="gripperPosition"
              id="gripperPosition"
              value={lineSurvey.gripperPosition}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Input
                type="text"
                placeholder="Bulk"
                name="bulk"
                id="bulk"
                value={lineSurvey.bulk}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Cases"
              name="cases"
              id="cases"
              value={lineSurvey.cases}
              onChange={onChange}
            />
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Layers"
              name="layers"
              id="layers"
              value={lineSurvey.layers}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <Input
              type="text"
              placeholder="Bottles/Layer"
              name="bottlesLayer"
              id="bottlesLayer"
              value={lineSurvey.bottlesLayer}
              onChange={onChange}
            />
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="# of Straps"
              name="numberOfStraps"
              id="numberOfStraps"
              value={lineSurvey.numberOfStraps}
              onChange={onChange}
            />
          </Col>
          <Col>
            <Input
              type="text"
              placeholder="Pallet Tag Loc"
              name="palletTagLocation"
              id="palletTagLocation"
              value={lineSurvey.palletTagLocation}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={finishDropDown} toggle={handleFinish}>
              <DropdownToggle caret color="primary">
                Finishes
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="finishes"
                  value={lineSurvey.finishes}
                  onClick={onChange}
                >
                  Up
                </DropdownItem>
                <DropdownItem
                  name="finishes"
                  value={lineSurvey.finishes}
                  onClick={onChange}
                >
                  Down
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown isOpen={flapsDropDown} toggle={handleFlaps}>
              <DropdownToggle caret color="primary">
                Flaps
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="flaps"
                  value={lineSurvey.flaps}
                  onClick={onChange}
                >
                  Up
                </DropdownItem>
                <DropdownItem
                  name="flaps"
                  value={lineSurvey.flaps}
                  onClick={onChange}
                >
                  Down
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown isOpen={rinserDropDown} toggle={handleRinserType}>
              <DropdownToggle caret color="primary">
                Rinser
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="rinserType"
                  value={lineSurvey.rinserType}
                  onClick={() => {
                    setShowRinserAir(true);
                    setShowRinserWater(false);
                  }}
                  {...onChange}
                >
                  Air
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setShowRinserWater(true);
                    setShowRinserAir(false);
                  }}
                  {...onChange}
                >
                  Water
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {showRinserAir && (
              <FormGroup>
                <Label className="font-weight-bold">Twist/Rotary</Label>

                <Input
                  type="select"
                  name="rinserTwistRotary"
                  id="rinserTwistRotary"
                  value={lineSurvey.rinserTwistRotary}
                  onChange={onChange}
                >
                  {" "}
                  <option></option>
                  <option>Twist</option>
                  <option>Rotary</option>
                </Input>
              </FormGroup>
            )}
            {showRinserWater && (
              <FormGroup row>
                <Label className="font-weight-bold">Water Temp</Label>
                <Input
                  type="text"
                  name="rinserWaterTemp"
                  id="rinserWaterTemp"
                  value={lineSurvey.rinserWaterTemp}
                  onChange={onChange}
                />
              </FormGroup>
            )}
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <Dropdown isOpen={tierSheetsDropDown} toggle={handleTierSheets}>
              <DropdownToggle caret color="primary">
                Tier Sheets
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="tierSheets"
                  value={lineSurvey.tierSheets}
                  onClick={onChange}
                >
                  Plastic
                </DropdownItem>
                <DropdownItem
                  name="tierSheets"
                  value={lineSurvey.tierSheets}
                  onClick={onChange}
                >
                  Fiberboard
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown
              isOpen={solidDecksAllowDropDown}
              toggle={handleSolidDecks}
            >
              <DropdownToggle caret color="primary">
                Solid Decks Allowable
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  name="solidDecksAllowable"
                  value={lineSurvey.solidDecksAllowable}
                  onClick={onChange}
                >
                  No
                </DropdownItem>
                <DropdownItem
                  name="solidDecksAllowable"
                  value={lineSurvey.solidDecksAllowable}
                  onClick={onChange}
                >
                  Yes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="submit" size="lg">
            Create New Line Survey
          </Button>
        </Row>
      </Form>
    </>
  );
};
