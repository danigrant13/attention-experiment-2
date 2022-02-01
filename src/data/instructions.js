import DemoImage1 from "../assets/demo_image_1.png";
import DemoA from "../assets/demo_a.jpg";
import DemoB from "../assets/demo_b.jpg";
import DemoC from "../assets/demo_c.jpg";
import DemoABB from "../assets/demo_a_bb.png";
import DemoBBB from "../assets/demo_b_bb.png";
import DemoCBB from "../assets/demo_c_bb.png";
import DemoLetters from "../assets/demo_letters.jpg";
import ExperimentOverviewFace from "../assets/select_overview_face_1.png";
import TrustOverview1Face from "../assets/select_overview_face_2.png";
import TrustOverview2Face from "../assets/select_overview_face_3.png";

import ExperimentOverviewBlur from "../assets/select_overview_blur_1.png";
import TrustOverview1Blur from "../assets/select_overview_blur_2.png";
import TrustOverview2Blur from "../assets/select_overview_blur_3.png";
import ExperimentOverviewBB from "../assets/select_overview_bb_1.png";
import TrustOverview1BB from "../assets/select_overview_bb_2.png";
import TrustOverview2BB from "../assets/select_overview_bb_3.png";


const EXPERIMENT_OVERVIEW = {
  faces: ExperimentOverviewFace,
  blurryFaces: ExperimentOverviewBlur,
  blackBoxes: ExperimentOverviewBB,
}
const TRUST_OVERVIEW1 = {
  faces: TrustOverview1Face,
  blurryFaces: TrustOverview1Blur,
  blackBoxes: TrustOverview1BB,
}
const TRUST_OVERVIEW2 = {
  faces: TrustOverview2Face,
  blurryFaces: TrustOverview2Blur,
  blackBoxes: TrustOverview2BB,
}

const defaultPrompt = "Press ENTER to continue."

const instructions = [[
  {
    items: [
      `The purpose of this study is to examine how people make social decisions while engaging in other cognitive tasks. `,
      
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "" : `There are three phases in this study; You are participating in the second phase. `)]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "" : `Recently, during phase one, CU Boulder students came into the lab and we took their photos. You will see their `)]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blurryFaces" ? "blurred " : "")]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "" : `photos during some part of today’s study. After you finish with the second phase of the study today, those CU Boulder students from phase one will return to take part in phase three.`)]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "" : `On the next slide there will be a diagram outlining the phases of this study.`)]},
    ],
    timeout: 10000,
    prompt: "Press ENTER to continue on to the instructions."
  }, {
    fullPageImage: ({stimRandomizer}) => (EXPERIMENT_OVERVIEW[stimRandomizer.name]),
    timeout: 20000,
    prompt: defaultPrompt,
  }, {
    items: [
      `Today you will take part in two tasks at the same time.`,
      `(1) In the first task you will be searching for a single letter within a sequence of many letters.`,
      `(2) In the second task you will take part in a decision task. You will be `,

      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? `presented with two 
        different Bayesian based machine learning algorithms, which we will call “black boxes”. The black boxes represent 
        algorithms based on data from previous students who took part in this decision task. In this task, you will choose 
        between these two black boxes ` : `randomly paired with two CU Boulder 
        students from phase one and then be asked to choose which `)]},

        `to give hypothetical sums of money to (e.g., $1).`,
    ],
    timeout: 10000,
    prompt: defaultPrompt,
  }, {
    items: [
      `Let's first begin by describing the search task.`,
    ],
    timeout: 2000,
    prompt: defaultPrompt,
  }, {
    items: [
      "Before each search task, an arrow will indicate which side of the screen letters will display.",
      "A right arrow ‘>’ will display when letters are going to be appear on the right side of the screen. A left arrow ‘<‘ will display when letters are going to appear on the left side of the screen.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:" }] },
    ],
    images: [DemoImage1],
    timeout: 10000,
    prompt: defaultPrompt,
  }, {
    items: [
      "Shortly after, the arrow will disappear and letters will begin cycling through on the side of the screen the arrow pointed to.",
      "Your goal is to read the letters as they appear and count how many ‘X’s you see in the sequence. Sometimes no ‘X’ will appear while other times one or more ‘X’s will appear.",
      {textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoLetters],
    timeout: 10000,
    prompt: "Press ENTER to continue the search task description.",
  }, {
    items: [
      "After the sequence completes, you will be asked a few questions, including how many ‘X’s you saw. The amount of money you will be awarded for participating in this study will in-part be dependent upon how well you correctly identify the number of ‘X’s that appear in each sequence.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoLetters],
    timeout: 10000,
    prompt: "Press ENTER to continue the search task description.",
  }, {
    items: [
      "Let's do a practice trial to orient you to the task.",
    ],
    prompt: "Press ENTER to begin the practice trial."
  }
], [{
    items: [
      {
        textItems: [
          ({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? `In the decision task there will be two black boxes to choose from. The black boxes represent algorithms based on data from previous students who took part in this decision task.` : `In the decision task there are two roles: Player One and Player Two. You will be Player One, and you will get to choose who becomes Player Two from the two CU Boulder students you are paired with.`),
          ({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? `Each of the black boxes performs a different a mathematical function that converts money inputted into money to be outputted back to money. The money outputted may be more or less than the money you put in, but it will never be a negative number, so the lowest outcome possible is to get 0 (zero).` : `You will be given a small sum of money. You will choose which CU Boulder student you want to join you in the decision task. Then you will send them your money. That student will become Player Two. Once you are finished with you turn, Player Two will later decide how much of the money, if any, they would like to give back to you.`),
          ({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? `In the decision task, you will be given a small sum of money. You will select which black box you want to use for the decision task. Then you will send the black box your money. The black boxes algorithm will dictate how much of the money, if any, will be given back to you.` : ``),
          ({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? `Importantly, you will identify which black box you select and then send that black box your money.` : `Importantly, as Player One, you will identify which student you select and then send that student your money.`),
        ]
      },
      "On the next screen, there will be a diagram outlining the steps for the decision task."
    ],
    timeout: 15000,
    prompt: defaultPrompt,
  }, {
    fullPageImage: ({stimRandomizer}) => (TRUST_OVERVIEW1[stimRandomizer.name]),
    timeout: 20000,
    prompt: defaultPrompt,
  }, {
    items: [
      "While you are doing the search task, ",
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "the two black boxes" : "two photographs of previous CU Boulder students ")]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blurryFaces" ? "with blurred faces " : "")]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "" : "from phase one ")]},
      "will also appear.",
      "When the letters disappear, ",
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "the black boxes " : "the photos ")]},
      "will remain on the screen for the decision task.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [({stimRandomizer}) => (stimRandomizer.name === 'blackBoxes' ? DemoABB : DemoA)],
    timeout: 5000,
    prompt: "Press ENTER to continue with the decision task description.",
  }, {
    items: [
      "Everyone in phase two of this study will be Player One.",
      "To begin, you will be given $1.00. You will then choose who you want to send your $1.00 to. The participant you select will become the Player Two. Your money will then be multiplied by four and placed in the Player Two’s account.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [({stimRandomizer}) => (stimRandomizer.name === 'blackBoxes' ? DemoBBB : DemoB)],
    timeout: 15000,
    prompt: "Press ENTER to continue with the decision task description.",
  }, {
    items: [
      {textItems: [
        "In this example, Player One",
        ({ state: { negativeLanguage } }) => ` is asked, "Which CU Boulder student do you ${negativeLanguage ? "" : ""}select?", and has selected ${negativeLanguage ? "dis" : ""}the red participant. As a result, the ${negativeLanguage ? 'blue' : 'red'} participant is assigned to be Player Two and $4.00 is placed in their account.`
      ]},
      {textItems: [
        ({ state: { negativeLanguage } }) => `So, if you select the person on the ${negativeLanguage ? "RIGHT" : "RIGHT"} then the person on the ${negativeLanguage ? "LEFT" : "RIGHT"} will become Player Two, and if you select the person on the ${negativeLanguage ? "LEFT" : "LEFT"} then the person on the ${negativeLanguage ? "RIGHT" : "LEFT"} will become Player Two.`,
      ]},
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    timeout: 15000,
    images: [({stimRandomizer}) => (stimRandomizer.name === 'blackBoxes' ? DemoCBB : DemoC)],
    prompt: "Press ENTER to continue with the decision task description.",
  }, {
    items: [
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "Black Box Mathematical Algorithm:" : "Player Two Role:")]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "The black box that is selected will perform its mathematical function that converts money inputted into money to be outputted." : "Player Two will return to the lab in the next few days to take part in the third phase of the study. They will be able to see everything you saw (including their own photo, the other participant’s photo, and the choice you made).")]},
      {textItems: [({stimRandomizer}) => (stimRandomizer.name === "blackBoxes" ? "The black box can give back as little as $0.00 and as much as $4.00 or any amount in between. The money returned will NOT be multiplied. It will simply be placed into your account." : "Player Two will have an opportunity to give back as little as $0.00 and as much as $4.00 or any amount in between to you. The money they return will NOT be multiplied. It will simply be placed into your account.")]},
      "On the next screen, there will be a diagram reviewing the steps for the decision task.",
    ],
    timeout: 20000,
    prompt: "Press ENTER to continue with the decision task description.",
  }, {
    fullPageImage: ({stimRandomizer}) => (TRUST_OVERVIEW2[stimRandomizer.name]),
    timeout: 20000,
    prompt: defaultPrompt,
  }, {
    items: ["Let's do two example trials to orient you to the task."],
    prompt: "Press ENTER to begin the first example trial."
  }
], [{
    items: [
      "Now that you are familiar with the two tasks, you will participate in three practice trials that will get you familiar with doing the tasks together. Then, you will take part in 25 real trials."
    ],
    prompt: defaultPrompt
  }, {
    items: [
      "Since there will be 25 trials, you will choose 25 other participants to become Player Two. Those 25 Player Twos will return to the lab for phase three and take part in their turn of the decision task.",
      "Along with you, many other participants will take on the Player One roles in phase two and will be making decisions about the same previous participants. So, when the 25 Player Twos you trusted return to the lab, they will likely be taking part in many Player Two roles in the decision task."
    ],
    prompt: defaultPrompt
  }, {
    items: [
      "Before moving on to the practice trials, we would like you to answer a few comprehension questions."
    ],
    prompt: defaultPrompt
  }
]];

export default instructions;
