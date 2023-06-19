import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import { CALCULATOR_STARTING_POINT } from "../constants";
import "./Calculator.css";

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
      savingsOverTime.push({ x: age, y: Math.round(totalSavings) });
    }

    return savingsOverTime;
  };

  const handleChange = (event) => {
    const value = parseFloat(event.target.value);
    setCalculatorInputs({
      ...calculatorInputs,
      [event.target.name]: value,
    });
    console.log(calculatorInputs);
  };

  return (
    <div className="p-3">
      <h1>Calculator</h1>
      <label htmlFor="age" className="form-label">
        Current Age
      </label>
      <input
        type="range"
        className="form-range"
        name="currentAge"
        min="0"
        max="100"
        step="0.25"
        id="currentAge"
        value={calculatorInputs.currentAge}
        onChange={handleChange}
      ></input>
      {calculatorInputs.currentAge}
      <br />
      <label htmlFor="income" className="form-label">
        Current Income (Annual)
      </label>
      <input
        type="range"
        className="form-range"
        name="currentIncome"
        min="0"
        max="500000"
        step="1000"
        id="currentIncome"
        value={calculatorInputs.currentIncome}
        onChange={handleChange}
      ></input>
      {calculatorInputs.currentIncome}
      <br />
      <label htmlFor="savings" className="form-label">
        Current Savings
      </label>
      <input
        type="range"
        className="form-range"
        name="currentSavings"
        min="0"
        max="500000"
        step="1000"
        id="savings"
        value={calculatorInputs.currentSavings}
        onChange={handleChange}
      ></input>
      {calculatorInputs.currentSavings}
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={lineChartValues} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="x" domain={[20, 90]} type="number" label="age" />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            width={200}
          ></YAxis>
          <Tooltip
            formatter={(value) => [
              `$${value.toLocaleString()}`,
              "Total Savings",
            ]}
          />
          <Area dataKey="y" stroke="green" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Calculator;
