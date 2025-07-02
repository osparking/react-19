interface ButtonProp {
  label: string;
  disabled: boolean;
}

function cancelOrder() {
  alert("주문 취소");
}
function MyButton({ label, disabled }: ButtonProp) {
  return (
    <button disabled={disabled} onClick={cancelOrder}>{label}</button>
  )
}

export default function BumSoap() {
  return (
    <div>
      <h1>범이비누 주문</h1>
      <MyButton label="구매 취소" disabled={false} />
    </div>
  )
}