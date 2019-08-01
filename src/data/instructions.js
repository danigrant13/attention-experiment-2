import DemoImage1 from "../assets/demo_image_1.png";
import DemoImage2 from "../assets/demo_image_2.png";
import DemoImage3 from "../assets/demo_image_3.jpg";
import DemoA from "../assets/demo_a.png";
import DemoB from "../assets/demo_b.png";
import DemoC from "../assets/demo_c.png";
import DemoD from "../assets/demo_d.png";
import DemoE from "../assets/demo_e.png";
import DemoG from "../assets/demo_g.png";
import DemoLetters from "../assets/demo_letters.jpg";

const defaultPrompt = "Press ENTER to continue."

export default [
  {
    items: [
      `There are three parts in this experiment; You will be participating in the second part of three.
       The primary purpose of this study is to examine how people make simple intuitive social decisions
       while engaging in other cognitive tasks.`,
      `Specifically, we are interested in how the presence of faces can influence performance in
       attention-related tasks.
       For this reason, you will be paired with current students attending the University of Colorado.`
    ],
    prompt: "Press ENTER to continue on to the instructions."
  }, {
    items: [
      `You will take part in several trials each involving two tasks.`,
      `Each trial will first begin with a search task. Specifically, you will 
       be searching for a single letter within a sequence of many letters.`,
      `Second, you will take part in a decision task.
       You will be asked to choose whether to give hypothetical sums of money (e.g., $1) to some 
       of the University of Colorado participants you will be randomly paired with.`
    ],
    prompt: defaultPrompt,
  }, {
    items: [
      `Let's first begin by describing the search task.`,
    ],
    prompt: defaultPrompt,
  }, {
    items: [
      "Before each search task, you will be oriented to the side of the screen letters will be displayed.",
      "When letters will be displayed on the right side, you will see a right-pointing arrow, \">\". When the letters will be displayed on the left side, you will see a left-pointing arrow, \"<\" (see example below).",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:" }] },
    ],
    images: [DemoImage1],
    prompt: defaultPrompt,
  }, {
    items: [
      "Shortly after, the arrow will disappear, and letters will begin cycling through on the side of screen the arrow pointed to.",
      {textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoLetters],
    prompt: "Press ENTER to continue the search task description",
  }, {
    items: [
      "A few seconds later, the University of Colorado participants will appear side-by-side below the cycling letters.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoImage2],
    prompt: "Press ENTER to continue the search task description",
  }, {
    items: [
      "During this task, your goal is to read the letters as they appear and to press the SPACE key if any \"X\" appears in the letter sequence. If no \"X\" appears, do not press any button. Some letter sequences will have one or more \"X\". Others will contain no \"X\".",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoImage2],
    prompt: "Press ENTER to continue the search task description",
  }, {
    items: [
      "After the search task, you will be asked a few questions about what you saw and then move on to the second task, the decision task.",
      { textItems: [{ component: "strong", text: "The basic layout of the screen will look like this:" }] }
    ],
    images: [DemoImage3],
    prompt: defaultPrompt,
  }, {
    items: [
      "Let's first begin by describing the decision task."
    ],
    prompt: "Press ENTER to continue on to the decision task description",
  }, {
    items: [
      {
        textItems: [
          "During this task, there are two roles: ",
          { component: "strong", text: "First Mover" },
          " and ",
          { component: "strong", text: "Second Mover." },
        ]
      },
      {
        textItems: [
          "You will be assigned to the role of ",
          { component: "strong", text: "First Mover" },
          ", and you will decide which other player you want to be ",
          { component: "strong", text: "Second Mover" },
          ". To begin, each participant will be allotted $1.00."
        ]
      },
    ],
    images: [DemoA],
    prompt: "Press ENTER to continue with the decision task description",
  }, {
    items: [
      {textItems: [{ component: "strong", text: "First Mover Role:" }]},
      {
        textItems: [
          "You will then be ask to choose which of the other two participants you would like to trust with you $1.00. The participant you choose will be assigned to the role of ",
          { component: "strong", text: "Second Mover" },
          ". The money will be multiplied by 4 and placed in the ",
          { component: "strong", text: "Second Mover" },
          ". To begin, each participant will be allotted $1.00.",
          " account (e.g., $1.00 x 4 = $4.00 placed in ",
          { component: "strong", text: "Second Mover's" },
          " account)."
        ]
      },
      {
        textItems: [
          "The basic layout of the screen will look like this:",
        ]
      }
    ],
    images: [DemoB],
    prompt: defaultPrompt,
  }, {
    items: [
      {textItems: [{ component: "strong", text: "First Mover Role:" }]},
      {
        textItems: [
          "In the demonstration below, the ",
          { component: "strong", text: "First Mover" },
          " has chosen the green highlighted participant on the right side to trust their $1.00 with. As a result, the chosen participant is assigned to the role of ",
          { component: "strong", text: "Second Mover" },
          ". The ",
          { component: "strong", text: "Second Mover" },
          " then has $4.00 added to their account.",
        ]
      },
      {
        textItems: [
          {component: "strong", text: "The basic layout of the screen will look like this:" },
        ]
      }
    ],
    images: [DemoC],
    prompt: defaultPrompt,
  }, {
    items: [
      {textItems: [{ component: "strong", text: "Second Mover Role:" }]},
      {
        textItems: [
          "Once you, ",
          { component: "strong", text: "First Mover" },
          ", has made you choice during the decision task, the ",
          { component: "strong", text: "Second Mover" },
          " will later return to the lab to take part in the first, and last, portion of the experiment.",
        ]
      },
      {
        textItems: [
          {component: "strong", text: "The basic screen layout Second Mover will see looks like this:" },
        ]
      }
    ],
    images: [DemoD],
    prompt: defaultPrompt,
  }, {
    items: [
      {textItems: [{ component: "strong", text: "Second Mover Role:" }]},
      {
        textItems: [
          "The ",
          { component: "strong", text: "Second Mover" },
          ", chose between and how much money you trusted the ",
          { component: "strong", text: "Second Mover" },
          " with",
        ]
      },
      {
        textItems: [
          {component: "strong", text: "The basic screen layout Second Mover will see looks like this:" },
        ]
      }
    ],
    images: [DemoD],
    prompt: defaultPrompt,
  }, {
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
      },
      {
        textItems: [
          {component: "strong", text: "The basic screen layout Second Mover will see looks like this:" },
        ]
      }
    ],
    images: [DemoG],
    prompt: defaultPrompt,
  },
];
