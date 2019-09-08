import DemoImage1 from "../assets/demo_image_1.png";
import DemoA from "../assets/demo_a.jpg";
import DemoB from "../assets/demo_b.jpg";
import DemoC from "../assets/demo_c.jpg";
import DemoE from "../assets/demo_e.png";
import DemoG from "../assets/demo_g.png";
import DemoLetters from "../assets/demo_letters.jpg";
import ExperimentOverview from "../assets/experiment_overview.jpg";
import TrustOverview1 from "../assets/trust_overview_1.jpg";
import TrustOverview2 from "../assets/trust_overview_2.jpg";

const defaultPrompt = "Press ENTER to continue."

export default [[
  {
    items: [
      `The purpose of this study is to examine how people make social decisions while engaging in other cognitive tasks. There are three phases in this study; You are participating in the second phase.`,
      `Last semester during phase one, CU Boulder students came into the lab and we took their photos. You will see their photos during some part of today’s study. After you finish with the second phase of the study today, those CU Boulder students from phase one will return to take part in phase three.`,
      `On the next slide there is a diagram for you to review.`
    ],
    timeout: 10000,
    prompt: "Press ENTER to continue on to the instructions."
  }, {
    fullPageImage: ExperimentOverview,
    timeout: 20000,
    prompt: defaultPrompt,
  }, {
    items: [
      `Today you will take part in two tasks at the same time.`,
      `(1) In the first task you will be searching for a single letter within a sequence of many letters.`,
      `(2) In the second you will take part in a decision task. You will be randomly paired with two CU Boulder students from phase one and then be asked to choose which to give hypothetical sums of money to (e.g., $1).`,
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
      "Before each search task, you will be oriented to the side of the screen letters will be display.",
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
      "In the decision task there are two roles: Player One and Player Two. You will be Player One, and you will get to choose who becomes Player Two from the two CU Boulder students you are paired with.",
      "To do this, first, a small amount of money will be given to you. To choose who will become Player Two, you will send them your money.",
      "When you trust Player Two with your money, this money is multiplied into a larger amount and given to Player Two.",
      "Then, in a few days, when Player Two returns to the lab for phase three, they can choose to give back to you none, some, or all the money that was given to them.",
    ],
    timeout: 15000,
    prompt: defaultPrompt,
  }, {
    fullPageImage: TrustOverview1,
    timeout: 20000,
    prompt: defaultPrompt,
  }, {
    items: [
      "While you are doing the search task, two photographs of previous CU Boulder students from phase one will also appear.",
      "When the letters disappear, the photos will remain on the screen for the decision task.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoA],
    timeout: 5000,
    prompt: defaultPrompt,
  }, {
    items: [
      "Everyone in phase two of this study will be Player One. As Player One, you will decide which participant you would like to become Player Two.",
      "To begin, you will be given $1.00. You will then choose who you want to send your $1.00 to. The participant you choose will become the Player Two. Your money will then be multiplied by four and placed in the Player Two’s account.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoB],
    timeout: 15000,
    prompt: "Press ENTER to continue with the decision task description",
  }, {
    items: [
      "In this example, the Player One has chosen the to trust the green highlighted participant. As a result, the red participant is assigned to be Player Two and $4.00 is placed in their account.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    timout: 15000,
    images: [DemoC],
    prompt: "Press ENTER to continue with the decision task description",
  }, {
    items: [
      {textItems: [{ component: "strong", text: "Player Two Role:" }]},
      "Player Two will return to the lab in the next few days to take part in the third phase of the study. They will be able to see everything you saw (including their own photo, the other participant’s photo, and the choice you made).",
      "Player Two will have an opportunity to give back as little as $0.00 and as much as $4.00 or any amount in between to you. The money they return will NOT be multiplied. It will simply be placed into your account.",
      "On the next screen there will be a diagram overview of the decision task.",
    ],
    timeout: 20000,
    prompt: "Press ENTER to continue with the decision task description",
  }, {
    fullPageImage: TrustOverview2,
    timeout: 20000,
    prompt: defaultPrompt,
  }, {
    items: ["Let's do a practice trial to orient you to the task."],
    prompt: "Press ENTER to begin the practice trial."
  }
], [{
    items: [
      "Now that you are familiar with the two tasks, you will participate in three practice trials that will get you familiar with doing the tasks together. Then, you will take park in 25 real trials."
    ],
    prompt: defaultPrompt
  }, {
    items: [
      "Since there will be 25 trials, you will choose 25 other participants to become Player Two. Many other people will also participate in phase two along with you and will be making decisions with the same previous participants. So, when the 25 Player Twos you chose return to the lab, they will likely be making many decisions as Player Two.",
      "When the 25 Player Twos return to the lab for part three, they will be presented with each trial in which they were chosen to be Player Two."
    ],
    prompt: defaultPrompt
  }, {
    items: [
      "Before moving on to the practice trials, we would like you to answer a few comprehension questions."
    ],
    prompt: defaultPrompt
  }
], [
  {
    items: [
      {textItems: [{ component: "strong", text: "Second Mover Role:" }]},
      {
        textItems: [
          "The ",
          { component: "strong", text: "Second Mover" },
          " will then have the oppotunity to return as little as $0.00 and as much as the amount they received from you, the ",
          { component: "strong", text: "First Mover" },
          ", ($4.00 in this example) or any amount in between.",
        ]
      },
      {
        textItems: [
          {component: "strong", text: "The basic screen layout Second Mover will see looks like this:" },
        ]
      }
    ],
    images: [DemoE],
    prompt: defaultPrompt,
  }, {
    items: [
      {textItems: [{ component: "strong", text: "Second Mover Role:" }]},
      {
        textItems: [
          "The amount they return will not be multiplied by 4, it will simply be placed directly into your, the ",
          { component: "strong", text: "First Mover's" },
          ", account. In this example, the ",
          { component: "strong", text: "Second Mover" },
          " has chosen to give back $2.50 to the ",
          { component: "strong", text: "First Mover" },
          ", which will be taken out of the ",
          { component: "strong", text: "Second Mover's" },
          " account and placed in the ",
          { component: "strong", text: "First Mover's" },
          " account."
        ]
      },
      {
        textItems: [
          {component: "strong", text: "The basic screen layout Second Mover will see looks like this:" },
        ]
      }
    ],
    images: [DemoE],
    prompt: defaultPrompt,
  }, {
    items: [
      {textItems: [{ component: "strong", text: "Second Mover Role:" }]},
      {
        textItems: [
          "In the example, at the end of the task, the ",
          { component: "strong", text: "First Mover" },
          ", you,would have $2.50 and the ",
          { component: "strong", text: "Second Mover" },
          ", the participant you chose, would also have $2.50.",
        ]
      }
    ],
    images: [DemoG],
    prompt: defaultPrompt,
  }, {
    items: [
      "Now, you are familiar with the 2 tasks involved in each trial. During this study, you will first take part in 3 practice trials that will orient you to the procedures. Then you will take park in 25 experimental trials."
    ],
    prompt: defaultPrompt
  }, {
    items: [
      "Keep in mind that this means that you will be choosing 25 other participants to become Second Movers (because there are 25 trials). Many other anonymous online participants will also take part in 25 trials and be randomly assigned to two University of Colorado participants each trial.",
      "When the University of Colorado participants, or Second Movers, return to the lab they will be presented with all the online anonymous participants who chose them to be Second Mover during individual trials. So, each Second Mover may take part in many trials as Second Mover. In other words, the Second Mover will be given the opportunity to return the amount of their choosing for each individual trial in which they were chosen to be Second Mover."
    ],
    prompt: defaultPrompt
  }, {
    items: [
      "Before moving on to the practice trials, we would like you to answer two comprehension questions."
    ],
    prompt: defaultPrompt
  }
]];
