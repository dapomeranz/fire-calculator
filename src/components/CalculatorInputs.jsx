const CalculatorInputs = (calculatorInputs, handleChange) => {
  return (
    <div>
      <h1>Calculator</h1>
      <label htmlFor="age" className="form-label">
        Current Age
      </label>
      <input
        type="range"
        className="form-range"
        name="currentAge"
        min="16"
        max="80"
        step="0.5"
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
      {/* ${calculatorInputs.currentIncome.toLocaleString()} */}
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
      {/* ${calculatorInputs.currentSavings.toLocaleString()} */}
      <br />
      <label htmlFor="age" className="form-label">
        Savings Rate
      </label>
      <input
        type="range"
        className="form-range"
        name="savingsRate"
        min="0"
        max=".5"
        step="0.01"
        id="savingsRate"
        value={calculatorInputs.savingsRate}
        onChange={handleChange}
      ></input>
      {calculatorInputs.savingsRate}
      <br />
      <label htmlFor="age" className="form-label">
        Target Retirement Age
      </label>
      <input
        type="range"
        className="form-range"
        name="retirementAge"
        min="40"
        max="80"
        step="0.5"
        id="retirementAge"
        value={calculatorInputs.retirementAge}
        onChange={handleChange}
      ></input>
      {calculatorInputs.retirementAge}
      <br />
      <label htmlFor="age" className="form-label">
        Income Growth Rate
      </label>
      <input
        type="range"
        className="form-range"
        name="incomeGrowthRate"
        min="0"
        max=".1"
        step="0.005"
        id="incomeGrowthRate"
        value={calculatorInputs.incomeGrowthRate}
        onChange={handleChange}
      ></input>
      {(calculatorInputs.incomeGrowthRate*100).toFixed(2)}%
      <br />
      <label htmlFor="age" className="form-label">
        Investment Growth Rate
      </label>
      <input
        type="range"
        className="form-range"
        name="investmentGrowthRate"
        min="0"
        max=".1"
        step="0.005"
        id="investmentGrowthRate"
        value={calculatorInputs.investmentGrowthRate}
        onChange={handleChange}
      ></input>
      {(calculatorInputs.investmentGrowthRate*100).toFixed(2)}%
      <br />
      <label htmlFor="age" className="form-label">
        Target Line
      </label>
      <input
        type="range"
        className="form-range"
        name="targetLine"
        min="100000"
        max="10000000"
        step="100000"
        id="targetLine"
        value={calculatorInputs.targetLine}
        onChange={handleChange}
      ></input>
      {/* ${calculatorInputs.targetLine.toLocaleString()} */}
      <br />
    </div>
  );
};

export default CalculatorInputs;
