import React from "react";

import {isMissing} from "../utils/presence";

import {DataContext, setParticipantNumber} from "../App";
import {Button, Form, Input} from "./ui/controls";
import Page from "./ui/Page";

const ParticipantNumberPage = ({ history }) => (
  <DataContext.Consumer>
    {({ dispatch, state }) => (
      <Page>
        <p>Enter the participant number:</p>
        <Form>
          <Input type="number" min="1" onChange={e => {
            dispatch(setParticipantNumber(e.target.value));
          }} />
          <Button
            onClick={() => history.replace('/welcome')}
            disabled={isMissing(state.participantNumber)}
          >
            Submit
          </Button>
        </Form>
      </Page>
    )}
  </DataContext.Consumer>
);

export default ParticipantNumberPage;
