import React, { useState } from "react";
import { InputText } from "../inputText/InputText";
import { useApi } from "../../services/api/index";

function Form() {
  const { postTransaction } = useApi();
  const [interestA, setInterestA] = useState("1");
  const [interestB, setInterestB] = useState("2");
  const [interestC, setInterestC] = useState("3");
  const [transaction, setTransaction] = useState("");

  function handleChange(value, name) {
    if (name === "interestA") setInterestA(value);
    if (name === "interestB") setInterestB(value);
    if (name === "interestC") setInterestC(value);
    if (name === "transaction") setTransaction(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    postTransaction({
      interestBandA: interestA,
      interestBandB: interestB,
      interestBandC: interestC,
      transaction: transaction,
    });
  }

  return (
    <form id="transactionForm" onSubmit={handleSubmit}>
      <fieldset>
        <InputText
          name="interestA"
          label="Interest rate upto &pound;1000:"
          value={interestA}
          onChange={handleChange}
        />
        <InputText
          name="interestB"
          label="Interest rate between &pound;1000 &amp; &pound;5000:"
          value={interestB}
          onChange={handleChange}
        />
        <InputText
          name="interestC"
          label="Interest rate above &pound;5000:"
          value={interestC}
          onChange={handleChange}
        />

        <InputText
          name="transaction"
          label="Transaction amount:"
          value={transaction}
          onChange={handleChange}
        />

        <div className="field-wrapper">
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
