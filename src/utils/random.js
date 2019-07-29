import {uniq} from "ramda";

export const shuffle = (array) => {
  const copy_array = array.slice(0);
  let length = copy_array.length;
  let t, i;

  // While there remain elements to shuffle…
  while (length) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * length--);

    // And swap it with the current element.
    t = copy_array[length];
    copy_array[length] = copy_array[i];
    copy_array[i] = t;
  }

  return copy_array;
}

export const coinFlip = () => (Math.random() < 0.5 ? 1 : 0);

export const sampleWithoutReplacement = (array, count) => {
  if (count > array.length) {
    console.error("Cannot take a sample " +
      "larger than the size of the set of items to sample.");
  }

  return uniq(shuffle(array)).slice(0, count);
}

export const sampleWithReplacement = (array, count, weights) => {
  let normalized_weights = null;

  if(typeof weights !== 'undefined'){
    if(weights.length !== array.length){
      console.error('The length of the weights array must equal the length of the array '+
      'to be sampled from.');
    }
    const weight_sum = weights.reduce((acc, val) => acc + val, 0);
    normalized_weights = weights.map(val => val / weight_sum);
  } else {
    normalized_weights = array.map(() => 1 / array.length);
  }

  const cumulative_weights = [normalized_weights[0]];

  for(let i=1; i < normalized_weights.length; i++){
    cumulative_weights.push(normalized_weights[i] + cumulative_weights[i-1]);
  }

  const samp = [];
  for (let i = 0; i < count; i++) {
    const rnd = Math.random();
    let index = 0;
    while(rnd > cumulative_weights[index]) { index++; }
    samp.push(array[index]);
  }

  return samp;
};
