import { useState } from "react";
import "./App.css";

export default function BumSoap() {
  const [onlyStocked, setOnlyStocked] = useState<boolean>(false);
  return (
    <div>
      <h1>범이비누 주문</h1>
      <label htmlFor="stockedChk">재고 있는 상품만 열거</label>
      <input 
        id="stockedChk" 
        type="checkbox"
        checked={onlyStocked}
        onChange={() => setOnlyStocked(!onlyStocked)} />
    </div>
  )
}