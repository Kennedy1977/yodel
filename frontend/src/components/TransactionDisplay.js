import React, { useContext } from "react";
import { GlobalContext } from "../services/context/GlobalState";
import { useApi } from "../services/api/index";

function TransactionDisplay() {
  const { transactions } = useContext(GlobalContext);
  const { removeTransaction } = useApi();

  if (transactions === null) return null;

  const output = transactions.transactions.map((transaction, index) => {
    return (
      <tr key={index}>
        <td>
          {
            new Date(transaction.transactionDate)
              .toLocaleString("en-GB")
              .split(",")[0]
          }
        </td>
        <td>{transaction.transaction}</td>
        <td>{transaction.interest}</td>
        <td>
          <button
            className="secondary"
            onClick={(e) => removeTransaction(transaction._id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction</th>
          <th>Interest</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{output}</tbody>
    </table>
  );
}
export default TransactionDisplay;
