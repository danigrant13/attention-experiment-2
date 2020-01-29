import React from "react";
import styled from "styled-components";
import {range} from "ramda";

import {DataContext, setDemographicQuestion} from "../App";
import {isMissing} from "../utils/presence";

import Page from "./ui/Page";

const P = styled.p`
  margin-bottom: 24px;
  max-width: 1000px;
`;

const Button = styled.button`
  background-color: #009CBB;
  border: none;
  padding: 9px 28px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-top: 24px;

  &:hover, &:focus {
    background-color: #008CBA;
  }

  &:disabled {
    background-color: #6699CC;
  }
`;

export const Select = styled.select`
  height: 35px;
  border-radius: 0;
  margin-right: 15px;
  width: 150px;
`;

const questions = [
  {
    text: "What is your gender identity?",
    input: "select",
    options: ["male", "female", "other"],
    required: true,
  },
  {
    text: ["What is your age?", <br />, "(Leave blank if you prefer not to say)"],
    input: "select",
    options: range(18, 91),
  },
  {
    text: "Which race or ethnic group best describes you?",
    input: "select",
    options: ["Asian/Asian-American", "Black/African-American", "Hispanic/Latin-American", "Native-Pacific Islander", "White/Caucasian-American", "Other"],
    required: true,
  },
  {
    text: "Which is your dominant hand?",
    input: "select",
    options: ["left", "right", "I use them equally"],
    required: true,
  },
  {
    text: ["What is your primary language?", <br />, "(i.e., the one you speak most of the time?)"],
    input: "select",
    options: ["English", "Spanish", "Mandarin", "Hindi", "Arabic", "Portuguese", "Bengali", "Russian", "Japanese", "Other"],
    required: true,
  },
  {
    text: "Please indicate the highest level of education you have completed.",
    input: "select",
    options: ["Elementary / Grammar School", "Middle School", "High School or Equivalient", "Vocational/ Technical School (2 years)", "Some College", "College or University (4 years)", "Master's Degree (MS, MA, MBA, etc.)", "Doctoral Degree (PhD)", "Professional Degree (MD, JD, etc.)", "Other"],
    required: true
  },
  {
    text: "Which best describes the area you live in?",
    input: "select",
    options: ["Urban", "Suburban", "Rural"],
    required: true
  },
  {
    text: "What is your current marital status?",
    input: "select",
    options: ["Prefer not to say", "Divorced", "Living with another", "Married", "Separated", "Single", "Widowed", "Other"],
    required: true
  },
  {
    text: "Please indicate you current household income in U.S. dollars.",
    input: "select",
    options: ["$10,000 - $19,999", "$20,000 - $29,999", "30,000 - $39,999", "$40,000 - $49,999", "$50,000 - $74,999", "$75,000 - $99,999", "$100,000 - $149,999", "$150,000 or more"],
    required: true
  },
  {
    text: "The study is over. Do you have any questions about today's experiment?",
    input: "text",
  },
  {
    text: "Was the experiment clear in its overall purpose and did the procedure make sense?",
    input: "text",
  },
  {
    text: "Do you have any personal feelings and/or reactions to the experiment?",
    input: "text",
  },
  {
    text: "Today's experiment was designed to help us test some very specific hypotheses abouthuman behavior. Do you have any idea what those hypotheses were? If you had to guess,what would you say were the hypotheses we were testing today?",
    input: "text",
  },
  {
    text: "Did you find any aspect of the procedure odd, upsetting or disturbing?",
    input: "text",
  },
  {
    text: "Did you wonder at any point whether there was more than meets the eye to any of the procedures that we had you complete today? That is, do you think that there might have been any information that we held back from explaining from you about the experiment until now?",
    input: "text",
  },
  {
    text: "If you had any suspicions, do you think they affected your behavior during the study?",
    input: "text",
  },
];

const renderInput = (page, value, index, onChange) => {
  switch(page.input) {
    case "text":
      return <textarea key={index} value={value} rows="10" cols="100" onChange={onChange} />;
    case "select":
      return (
        <Select key={index} onChange={onChange}>
          <option key={0}></option>
          {page.options.map((option, i) => (
            <option key={i + 1} value={option}>{option}</option>
          ))}
        </Select>
      )
    default:
      return null;
  }
}

const DemographicSurvey = ({ dispatch, history, pageIndex }) => {
  const currentPage = questions[pageIndex];
  const [value, setValue] = React.useState(null);

  const onStep = () => {
    dispatch(setDemographicQuestion(value));
    if (pageIndex === questions.length - 1) {
      history.replace('/thank-you');
    } else {
      history.replace(`/demographics/${pageIndex + 1}`)
    }
    setValue(null);
  }

  return (
    <Page key={currentPage}>
      <P>{currentPage.text}</P>
      {renderInput(currentPage, value, pageIndex, (e) => setValue(e.target.value))}
      <Button disabled={currentPage.required && isMissing(value)} onClick={onStep}>Next</Button>
    </Page>
  )
};

export default ({ history, match: { params: { page } } }) => (
  <DataContext.Consumer>
    {({ dispatch }) => (
      <DemographicSurvey pageIndex={parseInt(page)} history={history} dispatch={dispatch} />
    )}
  </DataContext.Consumer>
);
