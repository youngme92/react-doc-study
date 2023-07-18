export default function ProductRow({ product }: any) {
  const { name, stocked, price } = product;
  return (
    <tr>
      <td>
        <span className={stocked ? "" : "text-red-800"}>{name}</span>
      </td>
      <td>{price}</td>
    </tr>
  );
}
