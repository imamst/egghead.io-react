import { useDispatch } from "react-redux";

export function AmountField({ amount }) {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch({type: 'rates/amountChanged', payload: e.target.value})
  }

  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
