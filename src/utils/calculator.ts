import { CalculatorResult, CalculatorState } from '../types';

export const INDIAN_STATES_TARIFF: Record<string, { resTariff: number; comTariff: number; indTariff: number; stateName: string }> = {
  'UP': { stateName: 'Uttar Pradesh (UPPCL)', resTariff: 7.20, comTariff: 9.50, indTariff: 8.80 },
  'DL': { stateName: 'Delhi NCR (BSES / TPDDL)', resTariff: 7.00, comTariff: 9.80, indTariff: 9.20 },
  'HR': { stateName: 'Haryana (DHBVN)', resTariff: 6.80, comTariff: 9.20, indTariff: 8.50 },
  'RJ': { stateName: 'Rajasthan (JVVNL)', resTariff: 7.50, comTariff: 10.00, indTariff: 9.00 },
  'PB': { stateName: 'Punjab (PSPCL)', resTariff: 7.10, comTariff: 9.60, indTariff: 8.60 },
  'MP': { stateName: 'Madhya Pradesh (MPPKVVCL)', resTariff: 7.30, comTariff: 9.70, indTariff: 8.90 },
  'MH': { stateName: 'Maharashtra (MSEDCL)', resTariff: 8.50, comTariff: 11.50, indTariff: 10.20 },
  'PAN': { stateName: 'PAN India Average', resTariff: 7.00, comTariff: 9.50, indTariff: 8.80 },
};

export function calculateSolarSavings(inputs: CalculatorState): CalculatorResult {
  const stateData = INDIAN_STATES_TARIFF[inputs.state] || INDIAN_STATES_TARIFF['PAN'];
  
  let tariff = inputs.tariffPerUnit;
  if (!tariff || tariff <= 0) {
    if (inputs.propertyType === 'residential') tariff = stateData.resTariff;
    else if (inputs.propertyType === 'commercial') tariff = stateData.comTariff;
    else tariff = stateData.indTariff;
  }

  // Monthly electricity consumption in units
  const unitsPerMonth = inputs.monthlyBill / tariff;
  
  // 1 kW in North India generates ~ 120 units per month
  const rawCapacityNeeded = unitsPerMonth / 120;
  
  // Roof area check: 1 kW needs ~ 90 sq ft
  const maxCapacityByRoof = inputs.availableRoofArea > 0 ? inputs.availableRoofArea / 90 : 999;
  
  let recommendedCapacityKw = Math.min(rawCapacityNeeded, maxCapacityByRoof);
  recommendedCapacityKw = Math.max(1, Math.round(recommendedCapacityKw * 10) / 10);

  // Benchmark Cost per kW
  let costPerKw = 60000;
  if (inputs.propertyType === 'residential') {
    if (recommendedCapacityKw <= 3) costPerKw = 62000;
    else if (recommendedCapacityKw <= 10) costPerKw = 55000;
    else costPerKw = 50000;
  } else if (inputs.propertyType === 'commercial') {
    if (recommendedCapacityKw <= 50) costPerKw = 50000;
    else costPerKw = 45000;
  } else {
    // Industrial MW scale
    if (recommendedCapacityKw <= 100) costPerKw = 44000;
    else costPerKw = 40000;
  }

  const estimatedTotalCost = Math.round(recommendedCapacityKw * costPerKw);

  // Subsidy Calculation (PM Surya Ghar Scheme for Residential)
  let estimatedGovtSubsidy = 0;
  if (inputs.propertyType === 'residential') {
    if (recommendedCapacityKw >= 3) {
      estimatedGovtSubsidy = 78000;
    } else if (recommendedCapacityKw >= 2) {
      estimatedGovtSubsidy = 60000;
    } else {
      estimatedGovtSubsidy = 30000;
    }
  }

  const netInvestmentCost = Math.max(0, estimatedTotalCost - estimatedGovtSubsidy);

  // Energy Generation & Savings
  const annualUnitsGenerated = Math.round(recommendedCapacityKw * 120 * 12);
  const monthlySavings = Math.round(recommendedCapacityKw * 120 * tariff);
  const annualSavings = monthlySavings * 12;

  // Payback period
  let paybackPeriodYears = annualSavings > 0 ? netInvestmentCost / annualSavings : 3.5;
  paybackPeriodYears = Math.round(paybackPeriodYears * 10) / 10;

  // 25-Year Cumulative Net Savings (with modest 3% annual electricity tariff escalation)
  let total25YrSavings = 0;
  let currentAnnualSavings = annualSavings;
  for (let year = 1; year <= 25; year++) {
    total25YrSavings += currentAnnualSavings;
    currentAnnualSavings *= 1.03; // 3% tariff increase
  }
  const twentyFiveYearSavings = Math.round(total25YrSavings - netInvestmentCost);

  // Environmental Metrics
  const co2OffsetTonsPerYear = Math.round((recommendedCapacityKw * 1.3) * 10) / 10;
  const treesPlantedEquivalent = Math.round(co2OffsetTonsPerYear * 45);

  return {
    recommendedCapacityKw,
    estimatedTotalCost,
    estimatedGovtSubsidy,
    netInvestmentCost,
    monthlySavings,
    annualSavings,
    paybackPeriodYears,
    twentyFiveYearSavings,
    annualUnitsGenerated,
    co2OffsetTonsPerYear,
    treesPlantedEquivalent
  };
}
