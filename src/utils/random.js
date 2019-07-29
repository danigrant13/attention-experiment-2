const shuffle = (array) => {
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

export const sampleWithoutReplacement = (array, count) => {
  if (count > array.length) {
    console.error("Cannot take a sample " +
      "larger than the size of the set of items to sample.");
  }

  return shuffle(array).slice(0, count);
}

export const sampleWithReplacement = (array, count, weights) => {
  var normalized_weights = [];

  if(typeof weights !== 'undefined'){
    if(weights.length !== array.length){
      console.error('The length of the weights array must equal the length of the array '+
      'to be sampled from.');
    }
    let weight_sum = 0;
    for(let i=0; i < weights.length; i++){
      weight_sum += weights[i];
    }
    for(let i=0; i < weights.length; i++){
      normalized_weights.push( weights[i] / weight_sum );
    }
  } else {
    for(let i=0; i < array.length; i++){
      normalized_weights.push( 1 / array.length );
    }
  }

  var cumulative_weights = [normalized_weights[0]];

  for(let i=1; i < normalized_weights.length; i++){
    cumulative_weights.push(normalized_weights[i] + cumulative_weights[i-1]);
  }

  var samp = [];
  for (let i = 0; i < count; i++) {
    const rnd = Math.random();
    let index = 0;
    while(rnd > cumulative_weights[index]) { index++; }
    samp.push(array[index]);
  }

  return samp;
};
