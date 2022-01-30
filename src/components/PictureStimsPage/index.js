import React, { useContext } from "react";

import reducer, { genInitialValues, setSelection } from "./store";

import { DataContext, setTrustRow } from "../../App";
import DisplayDirection from "./DisplayDirection";
import ExitQuestions from "./ExitQuestions";
import Feedback from "./Feedback";
import LetterStim from "./LetterStim";
import TrustQuestion from "./TrustQuestion";

const PictureStimsPage = ({history, match: { params: { page } } }) => {
  const pageIndex = parseInt(page);
  const currentPage = PAGES[pageIndex];

  const [trustState, trustDispatch] = React.useReducer(reducer, genInitialValues(currentPage));
  const [currentState, setCurrentState] = React.useState("direction");
  const stepTo = (to) => () => {
    setCurrentState(to);
  };

  switch(currentState) {
    case "direction":
      return <DisplayDirection letterPosition={currentPage.letterPosition} onStep={stepTo("letters")} />;
    case "letters":
      return (
        <LetterStim
          currentPage={currentPage}
          letterPosition={currentPage.letterPosition}
          onStep={stepTo("trust")}
        />
      )
    case "trust":
      return (
        <DataContext.Consumer>
          {({state: {negativeLanguage}}) => (
            <TrustQuestion
              currentPage={currentPage}
              negativeLanguage={negativeLanguage}
              handleSubmit={({choice, selectionTime}) => {
                trustDispatch(setSelection(choice, selectionTime));
                stepTo('exit-questions')();
              }}
            />
          )}
        </DataContext.Consumer>
      );
    case "exit-questions":
      return (
        <DataContext.Consumer>
          {({dispatch}) => (
            <ExitQuestions
              dispatch={trustDispatch}
              currentPage={currentPage}
              handleSubmit={() => {
                dispatch(setTrustRow(trustState));
                stepTo('feedback')()
              }}
            />
          )}
        </DataContext.Consumer>
      );
    case "feedback":
      return (
        <DataContext.Consumer>
          {({ pages }) => (
            <Feedback
              currentPage={currentPage}
              page={pageIndex}
              trustState={trustState}
              handleSubmit={() => {
                if (pageIndex === pages.length - 1) {
                  history.replace('/thank-you');
                } else if (pageIndex === 2) {
                  history.replace('/experiment-intro');
                } else {
                  history.replace(`/trust-games/${pageIndex + 1}`);
                }
              }}
            />
          )}
        </DataContext.Consumer>
      );
    default:
      return <div />;
  }
};

export default PictureStimsPage;
