const ShippingPayment = ({ payment, ship, setPayment, setShip }) => {
  const onPaymentChange = (e) => {
    console.log(e.target.value);
    setPayment(e.target.value);
  };
  const onShipChange = (e) => {
    console.log(e.target.value);
    setShip(e.target.value);
  };
  return (
    <>
      <div onChange={onPaymentChange}>
        <label htmlFor="1">Dobierka</label>
        <input type="radio" name="payment" id="1" value="Dobierka" />

        <label htmlFor="2">Prevod</label>
        <input type="radio" name="payment" id="2" value="Prevod" />

        <label htmlFor="3">Hotovost</label>
        <input type="radio" name="payment" id="3" value="Hotovost" />

        <label htmlFor="4">Crypto</label>
        <input type="radio" name="payment" id="4" value="Crypto" />
      </div>
      <div onChange={onShipChange}>
        {payment === "Dobierka" && (
          <>
            <label htmlFor="1">Na adresu</label>
            <input type="radio" name="shipping" id="1" value="adresu" />

            <label htmlFor="2">Na postu</label>
            <input type="radio" name="shipping" id="2" value="postu" />
          </>
        )}
        {payment === "Prevod" && (
          <>
            <label htmlFor="1">
              Na adresu prevod = SK11 0000 0000 0012 3456 7890, TATRA
            </label>
            <input type="radio" name="shipping" id="1" value="adresu" />

            <label htmlFor="2">
              Na postu prevod = SK11 0000 0000 0012 3456 7890, TATRA
            </label>
            <input type="radio" name="shipping" id="2" value="postu" />
          </>
        )}
        {payment === "Hotovost" && (
          <>
            <label htmlFor="1">osobny odber</label>
            <input type="radio" name="shipping" id="1" value="odber" />
          </>
        )}
        {payment === "Crypto" && <div>Crypto</div>}
      </div>
    </>
  );
};

export default ShippingPayment;
