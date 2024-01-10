import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invest Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                // calculating total interest value by using yearData.valueEndOfYear and deducting yearData.annualInvestment for every year. 
                const totalInterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initialInvestment;
                // this will give us the total amount invested
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return <tr key={yearData.year}>

                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>

                </tr>
            })}
        </tbody>
    </table>
}