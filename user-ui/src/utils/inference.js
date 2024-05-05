// inference.js

import * as tf from '@tensorflow/tfjs';

const MODEL_URL = 'C:\Users\STEFFANIA KUBELIO\Desktop\model\saved_model\model.json';

const loadModel = async () => {
  const model = await tf.loadLayersModel(MODEL_URL);
  return model;
};

const performInference = async (image) => {
  const model = await loadModel();
  const tensor = tf.browser.fromPixels(image);
  const resized = tf.image.resizeBilinear(tensor, [224, 224]);
  const expanded = resized.expandDims(0);
  const prediction = await model.predict(expanded);
  return prediction;
};

export default performInference;
