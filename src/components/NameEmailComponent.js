import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NameEmail = (props) => {
  return (
    <Form>

      <FormGroup  className="text-left">
        <Label for="yourFirstName">First Name</Label>
        <Input type="text" name="firstName" id="yourFirstName" placeholder="First" />
      </FormGroup>
      <FormGroup  className="text-left">
        <Label for="yourLastName">Last Name</Label>
        <Input type="text" name="firstName" id="yourLastName" placeholder="Last" />
      </FormGroup>
      <FormGroup  className="text-left">
        <Label for="yourEmail">Email</Label>
        <Input type="email" name="email" id="yourEmail" placeholder="name@company.com" />
      </FormGroup>
      <FormGroup className="text-left" check>
        <Label check>
          <Input type="checkbox" required/>{' '}
          Yes, I’m 21 years or older. I have read and agree to the Official Rules.
        </Label>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
}

export default NameEmail;