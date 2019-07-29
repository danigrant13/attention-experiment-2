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
  },
];
