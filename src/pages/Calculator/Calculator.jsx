import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import { useState } from "react";
import { CALCULATOR_STARTING_POINT } from "../../constants";
import "./Calculator.css";
import CalculatorInputs from "../../components/CalculatorInputs";

function Calculator() {
  let [calculatorInputs, setCalculatorInputs] = useState(
    CALCULATOR_STARTING_POINT
  );
  let [lineChartValues, setLineChartValues] = useState([{ x: 0, y: 0 }]);

  const savingsRate = calculatorInputs.savingsRate;
  const incomeGrowthRate = calculatorInputs.incomeGrowthRate;
  const investmentGrowthRate = calculatorInputs.investmentGrowthRate;
  const retirementAge = calculatorInputs.retirementAge;

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
    setLineChartValues(getSavingsOverTime());
  };

  return (
    <div className="row p-4">
      <div className="col-3">
        <CalculatorInputs calculatorInputs={calculatorInputs} handleChange={handleChange}/>
      </div>
      <div className="col">
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={lineChartValues} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="x" domain={[10, 100]} type="number" label="age" />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            domain={[0, calculatorInputs.targetLine * 1.1]}
          ></YAxis>
          <Tooltip
            formatter={(value) => [
              `$${value.toLocaleString()}`,
              "Total Savings",
            ]}
          />
          <Area dataKey="y" stroke="green" activeDot={{ r: 8 }} isAnimationActive={false} />
          <ReferenceLine y={calculatorInputs.targetLine} label="Target" color="green" width={3}/>
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Calculator;
