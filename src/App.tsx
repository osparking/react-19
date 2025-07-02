function MyButton({label} : {label: string}) {
  return (
    <button>{label}</button>
  )
}

export default function BumSoap() {
  return (
    <div>
      <h1>범이비누 가게</h1>
      <MyButton label={"123"} />
    </div>
  )
}