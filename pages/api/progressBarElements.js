import data from './progressBarElements.json';

export const getProgressBarElements = () => {
  return data;
};

export default (req, res) => {
  const progressBarElements = getProgressBarElements();
  res.json(progressBarElements);
};