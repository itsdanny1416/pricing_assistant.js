// Pricing & Profit Calculator — L’AMORE Hoodie (unique values)

const productName = "L’AMORE Hoodie";   
const costPerUnit = 22.40;              
const basePrice = 64.00;                
const discountRate = 0.20;              
const salesTaxRate = 0.07;             
const fixedMonthlyCosts = 1500;         


const discountedPrice = basePrice * (1 - discountRate);
const finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
const profitPerUnit = finalPriceWithTax - costPerUnit;


const breakEvenUnits = profitPerUnit > 0
  ? Math.ceil(fixedMonthlyCosts / profitPerUnit)
  : Infinity;

const isProfitablePerUnit = profitPerUnit > 0;


console.log("Product:", productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-even Units:", Number.isFinite(breakEvenUnits) ? breakEvenUnits : "Infinity");
console.log("Profitable per Unit?:", isProfitablePerUnit);