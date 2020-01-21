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
  DropdownItem
} from "reactstrap";
import { useService } from "../api/Service";
import { DisplayFormMenu } from "../components/DisplayFormMenu";

export const DisplayLineSurvey = () => {
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
      <DisplayFormMenu />

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
          <Col>
            <Label className="font-weight-bold">Tech Service Rep</Label>
          </Col>
          <Col>
            <Input
              readOnly
              plaintext
              name="techServRep"
              id="techServRep"
              value="Greg Gratzinger"
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Row form>
              <Col>
                <Label className="font-weight-bold">Issue Date:</Label>
              </Col>
              <Col>
                <Input
                  readOnly
                  plaintext
                  name="issueDate"
                  id="issueDate"
                  value="1-4-2020"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label className="font-weight-bold">Rev. Date:</Label>
              </Col>
              <Col>
                <Input
                  readOnly
                  plaintext
                  name="revDate"
                  id="revDate"
                  value="1-4-2020"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          form
          noGutters
          className="mt-2 d-flex justify-content-center align-content-center"
        >
          <Col>
            <Label className="font-weight-bold">
              Company Name
              <Input
                plaintext
                readOnly
                name="companyName"
                id="companyName"
                value="Z&H-BROOKLYN BTLG"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Address
              <Input
                plaintext
                readOnly
                name="address"
                id="address"
                value="643 SOUTH ROAD Milton NY 12547"
              />
            </Label>
          </Col>
        </Row>

        <Row
          form
          noGutters
          className="mt-2 d-flex justify-content-center align-content-center"
        >
          <Label className="font-weight-bold">Contacts</Label>
        </Row>
        <Row
          form
          noGutters
          className="mt-2 d-flex justify-content-center align-content-center"
        >
          <Col>
            <Input
              plaintext
              readOnly
              name="contacts"
              id="contacts"
              value="Shannon Boromei"
            />
          </Col>
          <Col>
            <Input
              plaintext
              readOnly
              name="phone"
              id="phone"
              value="954-652-1234"
            />
          </Col>
          <Col>
            <Input
              plaintext
              readOnly
              name="email"
              id="email"
              value="shannon.boromei@zhbrooklyn.com"
            />
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Row form>
              <Col>
                <Label className="font-weight-bold">Future Inspects</Label>
              </Col>
              <Col>
                <Input
                  plaintext
                  readOnly
                  name="incomingInspection"
                  id="incomingInspection"
                  value="No"
                />
              </Col>
              <Col>
                <Label className="font-weight-bold">Plastic Pallets?</Label>
              </Col>
              <Col>
                <Input
                  plaintext
                  readOnly
                  name="plasticPalletsUsed"
                  id="plasticPalletsUsed"
                  value="Yes"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row form noGutters className="mt-2 d-flex justify-content-center">
          <Col>
            <Row>
              <Col>
                <Label className="font-weight-bold">Line</Label>
              </Col>
              <Col>
                <Input
                  plaintext
                  readOnly
                  name="lineDesignation"
                  id="lineDesignation"
                  value="1"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label className="font-weight-bold">Stg Duration</Label>
              </Col>
              <Col>
                <Input
                  plaintext
                  readOnly
                  name="wareStageDuration"
                  id="wareStageDuration"
                  value="as needed"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row form noGutters className="d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              Depall Type
              <Input
                plaintext
                readOnly
                name="depalletizerType"
                id="depalletizerType"
                value="Manual Dump"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Depall Model
              <Input
                plaintext
                readOnly
                name="depalletizerModel"
                id="depalletizerModel"
                value="N/A"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Depall Pall Size
              <Input
                plaintext
                readOnly
                name="depalletizerPalletSize"
                id="depalletizerPalletSize"
                value="40x80"
              />
            </Label>
          </Col>
        </Row>
        <Row form noGutters className="d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              # of Grippers
              <Input
                plaintext
                readOnly
                name="gripperHowMany"
                id="gripperHowMany"
                value="N/A"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Gripper Pos
              <Input
                plaintext
                readOnly
                name="gripperPosition"
                id="gripperPosition"
                value="N/A"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Sld Decks Allow
              <Input
                plaintext
                readOnly
                name="solidDecksAllowable"
                id="solidDecksAllowable"
                value="No"
              />
            </Label>
          </Col>
        </Row>
        <Row form noGutters className="d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              Bulk or Cases
              <Input
                plaintext
                readOnly
                name="bulkCases"
                id="bulkCases"
                value="Cases"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              # of Layers
              <Input plaintext readOnly name="layers" id="layers" value="" />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Bottles/Layer
              <Input
                plaintext
                readOnly
                name="bottlesLayer"
                id="bottlesLayer"
                value=""
              />
            </Label>
          </Col>
        </Row>
        <Row form noGutters className="d-flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              # of Straps
              <Input
                plaintext
                readOnly
                name="numberOfStraps"
                id="numberOfStraps"
                value="N/A"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Pal Tag Loc
              <Input
                plaintext
                readOnly
                name="palletTagLocation"
                id="palletTagLocation"
                value="Mid"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Finishes
              <Input
                plaintext
                readOnly
                name="finishes"
                id="finishes"
                value="Down"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Flaps
              <Input
                plaintext
                readOnly
                name="flaps"
                id="finishes"
                value="Down"
              />
            </Label>
          </Col>
        </Row>

        <Row form noGutters className="flex justify-content-center">
          <Col>
            <Label className="font-weight-bold">
              Rinser Type
              <Input
                plaintext
                readOnly
                name="rinserType"
                id="rinserType"
                value="Air"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Rinser Air Type
              <Input
                plaintext
                readOnly
                name="rinserTwistRotary"
                id="rinserTwistRotary"
                value="Rotary"
              />
            </Label>
          </Col>
          <Col>
            <Label className="font-weight-bold">
              Tier Sheets
              <Input
                plaintext
                readOnly
                name="tierSheets"
                id="tierSheets"
                value="Fiberboard"
              />
            </Label>
          </Col>
        </Row>
      </Form>
    </>
  );
};
