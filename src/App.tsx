function MyButton({ label, disabled }: { label: string, disabled: boolean }) {
  return (
    <button disabled={disabled}>{label}</button>
  )
}

export default function BumSoap() {
  return (
    <div>
      <h1>범이비누 가게</h1>
      <MyButton label="구매 취소" disabled={true} />
    </div>
  )
}