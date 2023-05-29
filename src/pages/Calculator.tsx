import { LineChart } from "recharts";
import { useState } from "react";
import { CALCULATOR_STARTING_POINT } from "../constants";

function Calculator() {
  let [calculatorInputs, setCalculatorInputs] = useState(
    CALCULATOR_STARTING_POINT
  );
  let [lineChartValues, setLineChartValues] = useState([{ x: 0, y: 0 }]);

  const savingsRate = 0.2; // assume 20% of income is saved
  const incomeGrowthRate = 0.05; // assume income grows at 5% per year
  const investmentGrowthRate = 0.08; // assume investments grow at 8% per year
  const retirementAge = 70;

  const getSavingsOverTime = () => {
    let totalSavings = calculatorInputs.currentSavings;
    let activeIncome = calculatorInputs.currentIncome;
    let savingsOverTime = [{ x: calculatorInputs.currentAge, y: totalSavings }];

    for (
      let age = calculatorInputs.currentAge + 1;
      age <= retirementAge;
      age++
    ) {
      totalSavings *= 1 + investmentGrowthRate;
      activeIncome *= 1 + incomeGrowthRate;
      totalSavings += activeIncome * savingsRate;
      savingsOverTime.push({ x: age, y: totalSavings });
    }

    return savingsOverTime;
  };

  const handleChange = (event: { target: { value: any; name: any } }) => {
    const value = parseFloat(event.target.value);
    setCalculatorInputs({
      ...calculatorInputs,
      [event.target.name]: value,
    });
    console.log(calculatorInputs);
    setLineChartValues(getSavingsOverTime());
  };

  return (
    <div>
      <h1>Calculator</h1>
      <label htmlFor="age" className="form-label">
        Current Age
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="100"
        step="0.25"
        id="currentAge"
        defaultValue={calculatorInputs.currentAge}
        onChange={handleChange}
      ></input>
      <h2>{calculatorInputs.currentAge}</h2>
      <br />
      <label htmlFor="income" className="form-label">
        Current Income (Annual)
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="500000"
        step="1000"
        id="currentIncome"
        defaultValue={calculatorInputs.currentIncome}
        onChange={handleChange}
      ></input>
      <h2>{calculatorInputs.currentIncome}</h2>
      <br />
      <label htmlFor="savings" className="form-label">
        Current Savings
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="5000000"
        step="1000"
        id="savings"
        defaultValue={calculatorInputs.currentSavings}
        onChange={handleChange}
      ></input>
      <h2>{calculatorInputs.currentSavings}</h2>
    </div>
  );
}

export default Calculator;
