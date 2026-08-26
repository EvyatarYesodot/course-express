const checkPrimeNumber = (num) => {
  if (!Number.isInteger(num) || num <= 1) return false;
  for (let numPart = 2; numPart < num; numPart++) {
    if (num % numPart === 0) return false;
  }
  return true;
};

export { checkPrimeNumber };
