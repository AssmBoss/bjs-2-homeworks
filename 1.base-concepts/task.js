function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4*a*c;

  if (discr >= 0) arr.push((-b + Math.sqrt(discr))/(2*a));
  if (discr > 0) arr.push((-b - Math.sqrt(discr))/(2*a));
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let currentDate = new Date();
  let totalAmount = 0;

  if (isNaN(percent)) {
      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)) {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amount)) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if (!(date instanceof Date) || date <= currentDate) {
      return `Параметр "дата окончания кредита" содержит неправильное значение "${date}"`;
  }

  let credit = amount - contribution;
  let months = (date.getFullYear() - currentDate.getFullYear()) * 12 - currentDate.getMonth() + date.getMonth();

  let p = (1 / 12) * (percent / 100);
  let payment = credit * (p + p / ((Math.pow(1 + p, months)) - 1));
  totalAmount = payment * months;

  console.log(+totalAmount.toFixed(2));
  return +totalAmount.toFixed(2);
}
