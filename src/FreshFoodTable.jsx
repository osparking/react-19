import { useState } from "react";
import "./App.css";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({
  products,
  searchKey: filterText,
  stockedOnly: inStockOnly,
}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product, index) => {
    if (
      !filterText ||
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    ) {
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={rows.length} />
        );
        lastCategory = product.category;
      }
      rows.push(<ProductRow product={product} key={rows.length} />);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ searchKey, stockedOnly, setSearchKey, setStockedOnly }) {
  return (
    <form>
      <input
        type="text"
        placeholder="검색 키"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={stockedOnly}
          onChange={(e) => setStockedOnly(e.target.checked)}
        />{" "}
        재고 있는 상품만 표시
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [searchKey, setSearchKey] = useState("");
  const [stockedOnly, setStockedOnly] = useState(true);

  return (
    <div>
      <SearchBar
        searchKey={searchKey}
        stockedOnly={stockedOnly}
        setSearchKey={setSearchKey}
        setStockedOnly={setStockedOnly}
      />
      <ProductTable
        products={products}
        searchKey={searchKey}
        stockedOnly={stockedOnly}
      />
    </div>
  );
}

const PRODUCTS = [
  { category: "과일", price: "10000원", stocked: true, name: "참외" },
  { category: "과일", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "과일", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function FreshFoodTable() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default FreshFoodTable;
