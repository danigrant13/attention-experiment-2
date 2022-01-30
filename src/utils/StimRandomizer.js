import { sample, sampleWithoutReplacement } from "./random";

class Bucket {
  constructor(array, weight) {
    this._array = array;
    this.weight = weight;
  }

  length() {
    return this._array.length;
  }

  filter(callback) {
    return this._array.filter(callback);
  }

  setWeight(newWeight) {
    this.weight = newWeight;
  }

  removeSample(sample) {
    this._array = this.filter((val) => {
        return !sample.includes(val);
    });
  }

  sample(count) {
    const sample = sampleWithoutReplacement(this._array, count);
    this.removeSample(sample);
    return sample;
  }
};

class StimuliRandomizer {
  constructor(name, practiceStimuli, stimuli, sampleSize = 2) {
    this.name = name;
    this.practiceStimuli = practiceStimuli;
    this.weightTotal = stimuli.reduce((acc, bucketArray) => acc + bucketArray.length, 0);
    this.sampleSize = sampleSize;
    this._stimuli = stimuli.map((bucketArray) => (
      new Bucket(bucketArray, bucketArray.length / this.weightTotal)
    ));
  };

  firstPractice() {
    return this.practiceAt(0);
  }

  secondPractice() {
    return this.practiceAt(1);
  }

  practiceAt(index) {
    return this.practiceStimuli[index];
  }

  sample() {
    return sample(this._stimuli, 1)[0];
  }

  getWeights() {
    return this._stimuli.map((bucket) => bucket.weight);
  }

  calculateWeight() {
    this._stimuli.forEach((bucket) => {
        bucket.setWeight(bucket.length() / this.weightTotal);
    });
  };

  getSample() {
    let bucket;

    do {
      bucket = this.sample()
    } while (bucket.length() < this.sampleSize)
    const sample = bucket.sample(this.sampleSize);
    this.weightTotal -= sample.length;
    this.calculateWeight();
    return sample; 
  }
};

export default StimuliRandomizer;
