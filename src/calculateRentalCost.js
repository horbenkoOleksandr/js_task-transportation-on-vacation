/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const totalPrice = price * days;

  if (days >= 7) {
    return totalPrice - 50;
  }

  if (days >= 3) {
    return totalPrice - 20;
  }

  return totalPrice;
}

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);

module.exports = calculateRentalCost;
