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
import { useService } from "../api/Service";
import { useNewFormControls } from "../api/NewFormControlState";
import { DisplayFormMenu } from "../components/DisplayFormMenu";

export const DisplayDepallitizer = () => {
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
  return (
    <>
      <DisplayFormMenu />

      <Form className="text-primary">
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <FormGroup inline className="m-md-1 p-md-1">
              <Label className="font-weight-bold">Upcoming Inspections</Label>
              <Input
                plaintext
                readOnly
                name="incomingInspection"
                id="incomingInspection"
                value="No"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup inline className="m-md-1 p-md-1">
              <Label className="font-weight-bold">Plastic Pallets Used?</Label>
              <Input
                plaintext
                readOnly
                name="plasticPalletsUsed"
                id="plasticPalletsUsed"
                value="Yes"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Line Designation</Label>
              <Input
                plaintext
                readOnly
                name="lineDesignation"
                id="lineDesignation"
                value="1"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Col>
                <Input
                  plaintext
                  readOnly
                  name="wareStageDuration"
                  id="wareStageDuration"
                  value="used as needed"
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
                plaintext
                readOnly
                name="depalletizerType"
                id="depalletizerType"
                value="Manual Dump"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                plaintext
                readOnly
                name="depalletizerModel"
                id="depalletizerModel"
                value="N/A"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                plaintext
                readOnly
                name="depalletizerPalletSize"
                id="depalletizerPalletSize"
                value="40x80"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="d-flex justify-content-center">
          <Col>
            <Input
              plaintext
              readOnly
              name="gripperHowMany"
              id="gripperHowMany"
              value="N/A"
            />
          </Col>
        </Row>
        <Row form className="d-flex justify-content-center">
          <Col>
            <Input
              plaintext
              readOnly
              name="gripperHowMany"
              id="gripperHowMany"
              value="N/A"
            />
          </Col>
          <Col>
            <Input
              plaintext
              readOnly
              name="gripperPosition"
              id="gripperPosition"
              value="N/A"
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <Input plaintext readOnly name="cases" id="cases" value="Cases" />
          </Col>
          <Col>
            <Input plaintext readOnly name="layers" id="layers" value="" />
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <Input
              plaintext
              readOnly
              name="bottlesLayer"
              id="bottlesLayer"
              value=""
            />
          </Col>
          <Col>
            <Input
              plaintext
              readOnly
              name="numberOfStraps"
              id="numberOfStraps"
              value="N/A"
            />
          </Col>
          <Col>
            <Input
              plaintext
              readOnly
              name="palletTagLocation"
              id="palletTagLocation"
              value="Mid"
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Finishes</Label>
              <Input
                plaintext
                readOnly
                name="finishes"
                id="finishes"
                value="Down"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Flaps</Label>
              <Input
                plaintext
                readOnly
                name="flaps"
                id="finishes"
                value="Down"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Rinser</Label>
              <Input
                plaintext
                readOnly
                name="rinserType"
                id="rinserType"
                value="Air"
              />
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold">Twist/Rotary</Label>
              <Input
                plaintext
                readOnly
                name="rinserTwistRotary"
                id="rinserTwistRotary"
                value="Rotary"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form noGutters className="mt-3 d-flex justify-content-center">
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Tier Sheets</Label>
              <Input
                plaintext
                readOnly
                name="tierSheets"
                id="tierSheets"
                value="Fiberboard"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Solid Decks Allowable</Label>
              <Input
                plaintext
                readOnly
                name="solidDecksAllowable"
                id="solidDecksAllowable"
                value="No"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default DisplayDepallitizer;
