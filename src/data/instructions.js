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
      "When letters will be displayed on the right side, you will see a right-pointing arrow, \">\". When the letters will be displayed on the left side, you will see a left-pointing arrow, \"<\".",
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
    prompt: "Press ENTER to continue the search task description.",
  }, {
    items: [
      "A few seconds later, the University of Colorado participants will appear side-by-side below the cycling letters.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoImage2],
    prompt: "Press ENTER to continue the search task description.",
  }, {
    items: [
      "During this task, your goal is to read the letters as they appear and track how many “X” letters appears in the sequence. Some sequences will have no “X” appear, while others will contain one or more “X” letters.",
      { textItems: [{component: "strong", text: "The basic layout of the screen will look like this:"}] }
    ],
    images: [DemoImage2],
    prompt: "Press ENTER to continue the search task description.",
  }, {
    items: [
      "After the search task, you will be asked a few questions and then move on to the decision task. One will be how many “X” letters you saw. For each trial you correctly answer the number of “X” letters you will receive and additional $.05.",
      { textItems: [{ component: "strong", text: "The basic layout of the screen will look like this:" }] }
    ],
    images: [DemoImage3],
    prompt: defaultPrompt,
  }, {
    items: [
      "Now, let’s begin describing the decision task."
    ],
    prompt: "Press ENTER to continue on to the decision task description.",
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
    prompt: "Press ENTER to continue with the decision task description.",
  }, {
    items: [
      {textItems: [{ component: "strong", text: "First Mover Role:" }]},
      {
        textItems: [
          "You will then be ask to choose which of the other two participants you would like to trust with your $1.00. The participant you choose will be assigned to the role of ",
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
          { component: "strong", text: "The basic layout of the screen will look like this:" },
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
          "Once you, the ",
          { component: "strong", text: "First Mover" },
          ", has made you choice during the decision task, the ",
          { component: "strong", text: "Second Mover" },
          " will later return to the lab to take part in the third, and last, portion of the experiment.",
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
];
