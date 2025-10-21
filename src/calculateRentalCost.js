/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const sum = price * days;

  if (days >= 7) {
    return sum - 50;
  }

  if (days >= 3) {
    return sum - 20;
  }

  return sum;
}

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);

module.exports = calculateRentalCost;
