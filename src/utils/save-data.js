import {flatten, join, map, pipe, range, thunkify} from "ramda";

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

const headers = pipe(
  thunkify(range)(1, 29),
  map((index) => map(val => val + index, csvKeys)),
  flatten,
  join(',')
)() + ',' + range(1, 16).map(num => "Q" + num);

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


export default ({ trustData, demographics }) =>
  `${headers}\n${trustJSONtoRows(trustData)},${demographics.join(',')}`;
