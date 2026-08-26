const checkPrimeNumber = (num) => {
  if (!Number.isInteger(num) || num <= 1) return false;
  for (let numPart = 2; numPart < num; numPart++) {
    if (num % numPart === 0) return false;
  }
  return true;
};

const checkArrPrimeNumbers = (arrNum) => {
  for (let index = 0; index < arrNum.length; index++) {
    if (checkPrimeNumber(arrNum[index]) === false) return false;
  }
  return true;
};

const getArrPrimNumbers = (amount) => {
  const primNumbers = [];
  let num = 2;
  while (primNumbers.length < amount) {
    if (checkPrimeNumber(num)) {
      primNumbers.push(num);
    }
    num++;
  }
  return primNumbers;
};

export { checkArrPrimeNumbers, getArrPrimNumbers };
