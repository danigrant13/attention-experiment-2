import {flatten, join, map, pipe, range, thunkify} from "ramda";

const removeCommas = string => string && string.replace(/,/g, '*');

const csvKeys = [
  "actualX",
  "perceivedX",
  "letterSide",
  "faseLeft",
  "faceRight",
  "faceChosen",
  "choiceDuration",
  "sideChosen"
];

const headers = [
  'participant',
  'condition',
  pipe(
    thunkify(range)(1, 29),
    map((index) => map(val => val + index, csvKeys)),
    flatten,
    join(',')
  )(),
  "Manipulation Q1, Manipulation Q2, Manipulation Q3, Manipulation Q4"
].join(',')

const trustItemToRow = trustItem => ([
  trustItem.actualNumXs,
  trustItem.exitQuestions.numberOfXs,
  trustItem.letterPosition,
  trustItem.choices[0],
  trustItem.choices[1],
  trustItem.selection.image,
  trustItem.selection.decisionTime,
  (trustItem.selection.image === trustItem.choices[0] ? "left" : "right")
])

const trustJSONtoRows = pipe(
  map(trustItemToRow),
  flatten,
  join(',')
)

const manipulationCheckRow = ({question1, question2, question3, question4}) =>
  [question1, question2, question3, question4].map(man => removeCommas(man)).join(',')

export default ({ negativeLanguage, trustData, manipulationCheck, participantNumber }) =>
  `${headers}\n` +
  `${participantNumber || "missing"},` +
  `${negativeLanguage ? "notTrust" : "trust"},` +
  `${trustJSONtoRows(trustData)},` +
  `${manipulationCheckRow(manipulationCheck)}`;
