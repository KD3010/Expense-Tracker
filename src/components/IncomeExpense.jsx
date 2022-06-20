import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount.reduce((acc, item) => (item > 0 ? (acc += Math.abs(item)) : (acc += 0)), 0);
  const expense = amount.reduce(
    (acc, item) => (item < 0 ? (acc += Math.abs(item)) : (acc += 0)),
    0
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus" id="money-plus">
          +₨ {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus" id="money-minus">
          -₨ {expense}
        </p>
      </div>
    </div>
  );
};
