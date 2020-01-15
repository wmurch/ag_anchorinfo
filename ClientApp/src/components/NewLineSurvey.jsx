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
import { useNewFormControls } from "../api/NewFormControlState";
import { FormMenu } from "./FormMenu";
import { useService } from "../api/Service";

export const NewLineSurvey = () => {
  const {
    showFoodForm,
    setShowFoodForm,
    showBeerForm,
    setShowBeerForm,
    showLiquorForm,
    setShowLiquorForm,
    newLineSurveySubmitted,
    showFormButtons,
    handleToggleClick
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
      {newLineSurveySubmitted && (
        <>
          <FormMenu />
        </>
      )}

      <Form
        className="text-primary"
        onSubmit={e => {
          createLineSurvey({ lineSurvey });
          {
            handleSubmit(e);
          }
        }}
      >
        <Row form noGutters className="d-flex justify-content-md-around">
          <FormGroup inline className="m-md-1 p-md-1">
            <Label className="font-weight-bold">Tech Service Rep</Label>
            <Input
              bsSize="sm"
              type="text"
              name="techServRep"
              id="techServRep"
              value={lineSurvey.techServRep}
              onChange={onChange}
            />
          </FormGroup>
        </Row>
        <Row form noGutters className="d-flex justify-content-md-around">
          <FormGroup sm="auto">
            <Label className="font-weight-bold">Issue Date:</Label>
            <Input
              bsSize="sm"
              type="date"
              name="issueDate"
              id="issueDate"
              value={lineSurvey.issueDate}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup inline className="m-md-1 p-md-1">
            <Label className="font-weight-bold">Rev. Date:</Label>
            <Input
              bsSize="sm"
              type="date"
              name="revDate"
              id="revDate"
              value={lineSurvey.revDate}
              onChange={onChange}
            />
          </FormGroup>
        </Row>
        <Row
          form
          noGutters
          className="d-flex justify-content-center align-content-center"
        >
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Company Name</Label>
              <Input
                type="text"
                placeholder="Company Name"
                name="companyName"
                id="companyName"
                value={lineSurvey.companyName}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Address</Label>
              <Input
                type="text"
                placeholder="Address"
                name="address"
                id="address"
                value={lineSurvey.address}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="m-md-1 p-md-1 d-flex justify-content-md-center">
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">City</Label>

              <Input
                type="text"
                placeholder="City"
                name="city"
                id="city"
                value={lineSurvey.city}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">State</Label>
              <Input
                type="text"
                placeholder="State"
                name="state"
                id="state"
                value={lineSurvey.state}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold">Zip</Label>
              <Input
                type="text"
                placeholder="ZipCode"
                name="zip"
                id="zip"
                value={lineSurvey.zip}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="d-flex justify-content-md-center">
          <Label className="font-weight-bold">Contacts</Label>
        </Row>
        <Row form className="d-flex justify-content-md-center">
          <Col>
            <FormGroup>
              <Label className="font-weight-bold" hidden>
                Name
              </Label>

              <Input
                type="text"
                placeholder="Name"
                name="contacts"
                id="contacts"
                value={lineSurvey.contacts}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold" hidden>
                Phone
              </Label>

              <Input
                type="text"
                bsSize="md"
                placeholder="Phone"
                name="phone"
                id="phone"
                value={lineSurvey.phone}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="font-weight-bold" hidden>
                Email
              </Label>
              <Input
                type="text"
                bsSize="md"
                placeholder="Email"
                name="email"
                id="email"
                value={lineSurvey.email}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </Row>
        {showFormButtons && (
          <>
            <Row className="d-flex justify-content-md-around">
              <Button
                color="primary"
                size="lg"
                onClick={() => {
                  setShowFoodForm(true);
                  setShowBeerForm(false);
                  setShowLiquorForm(false);
                  console.log(showFoodForm);
                  handleToggleClick();
                }}
              >
                Food
              </Button>
              <Button
                color="primary"
                size="lg"
                onClick={() => {
                  setShowBeerForm(true);
                  setShowFoodForm(false);
                  setShowLiquorForm(false);
                  console.log(showBeerForm);
                  handleToggleClick();
                }}
              >
                Beer
              </Button>
              <Button
                color="primary"
                size="lg"
                onClick={() => {
                  setShowLiquorForm(true);
                  setShowFoodForm(false);
                  setShowBeerForm(false);
                  console.log(showLiquorForm);
                  handleToggleClick();
                }}
              >
                Liquor
              </Button>
            </Row>
          </>
        )}
        <Row>
          <Button color="primary" type="submit" size="lg">
            Create New Line Survey
          </Button>
        </Row>
      </Form>
    </>
  );
};
