import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({
  products,
  filterText,
  inStockOnly,
}: any) {
  const rows: any[] = [];
  let lastCategory: any = null;

  products.forEach((product: { category: any; name: any; stocked: any }) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (lastCategory !== product.category) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>price</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
