import * as React from "react";

const useNewContainerInfo = () => {
  return (
    <>
      <Row>
        <Col sm="auto m-md-1 p-md-2">
          <FormGroup>
            <Label className="font-weight-bold">
              Incoming Inspection
              <Input
                type="select"
                bsSize="md"
                name="incomingInspection"
                id="incomingInspection"
              >
                <option></option>
                <option>No</option>
                <option>Yes</option>
              </Input>
            </Label>
          </FormGroup>
        </Col>
        <Col sm="auto m-md-1 p-md-2">
          <FormGroup>
            <Label className="font-weight-bold">
              Line Designation:
              <Input type="text" bsSize="md" name="custName" id="custName" />
            </Label>
          </FormGroup>
        </Col>
        <Col sm="auto m-md-1 p-md-2">
          <FormGroup>
            <Label className="font-weight-bold">
              how long is ware staged:
              <Input
                type="text"
                bsSize="md"
                name="custName"
                id="custName"
                placeholder="used as needed"
              />
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Depalletizer
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Model:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Pallet Size:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Grippers
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>How many:</InputGroupText>
              <Input type="text" bsSize="md" name="custName" id="custName" />
            </InputGroupAddon>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position:</InputGroupText>
            </InputGroupAddon>
            <Input type="text" bsSize="md" name="custName" id="custName" />
          </InputGroup>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Plasting Pallets
          <Input
            type="select"
            bsSize="md"
            name="incomingInspection"
            id="incomingInspection"
          >
            <option></option>
            <option>No</option>
            <option>Yes</option>
          </Input>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Bulk
          <Input type="text" bsSize="md" name="custName" id="custName" />
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Cases:
          <Input type="text" bsSize="md" name="custName" id="custName" />
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          layers:
          <Input type="text" bsSize="md" name="custName" id="custName" />
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Bottles/Layer:
          <Input type="text" bsSize="md" name="custName" id="custName" />
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Flaps
          <Input
            type="select"
            bsSize="md"
            name="incomingInspection"
            id="incomingInspection"
          >
            <option></option>
            <option>Up</option>
            <option>Down</option>
          </Input>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Finishes
          <Input
            type="select"
            bsSize="md"
            name="incomingInspection"
            id="incomingInspection"
          >
            <option></option>
            <option>Up</option>
            <option>Down</option>
          </Input>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Number of Straps
          <Input type="text" bsSize="md" name="custName" id="custName" />
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Tier Sheets
          <Input
            type="select"
            bsSize="md"
            name="incomingInspection"
            id="incomingInspection"
          >
            <option></option>
            <option>Plastic</option>
            <option>Fiberboard</option>
          </Input>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Pallet Tag Location
          <Input type="text" bsSize="md" name="custName" id="custName" />
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Solid Decks Allowable
          <Input
            type="select"
            bsSize="md"
            name="incomingInspection"
            id="incomingInspection"
          >
            <option></option>
            <option>No</option>
            <option>Yes</option>
          </Input>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Rinser
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>Air</option>
              <option>Water</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Water Temp:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Twist/Rotary:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        {showFood && (
          <Label className="font-weight-bold m-md-1 p-md-2">
            Preheat Tunnel:
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Length:</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>High Temp:</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
          </Label>
        )}
        <Label className="font-weight-bold m-md-1 p-md-2">
          Filler:
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Speed:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Fill Tube Size:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Product Temp:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Make:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Model:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Capper:
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>White Cap</option>
              <option>Alcoa</option>
              <option>Other</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Make:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Model:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        {showLiquor && (
          <Label className="font-weight-bold m-md-1 p-md-2">
            Corker:
            <InputGroup>
              <Input type="select">
                <option></option>
                <option>Plastic</option>
                <option>Cork</option>
              </Input>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Diameter:</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Length:</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
          </Label>
        )}
        {showBeer && (
          <Label className="font-weight-bold m-md-1 p-md-2">
            Pasteurizer:
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Product Max Temp:</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            Note: Temperatures should not exceed 147 Deg F
          </Label>
        )}
        {showFood && (
          <Label className="font-weight-bold m-md-1 p-md-2">
            Cooler First 4 Zones:
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>1</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>2</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>3</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>4</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">
                <InputGroupText>F</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Label>
        )}
        <Label className="font-weight-bold m-md-1 p-md-2">
          labeler:
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>Rotary</option>
              <option>Roll Through</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Amount:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type:</InputGroupText>
            </InputGroupAddon>
            <Input type="select">
              <option></option>
              <option>Paper</option>
              <option>Pressure Sensitive</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Make:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Model:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Dud Detector:
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>Yes</option>
              <option>No</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Bottom Insp:
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>Yes</option>
              <option>No</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Xray:
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>Yes</option>
              <option>No</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Case Packer:
          <InputGroup>
            <Input type="select">
              <option></option>
              <option>Yes</option>
              <option>No</option>
            </Input>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Type:</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="font-weight-bold m-md-1 p-md-2">
          Other notes about customer's line (ie jam points, bad line flow, past
          problems):
          <Input type="textarea" bsSize="md" name="custName" id="custName" />
        </Label>
      </FormGroup>
      <Button variant="primary" type="submit" size="lg">
        Add Line Survey
      </Button>
    </>
  );
};

export default NewContainerInfo;
