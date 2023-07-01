import { getAllProducts } from "~/actions/product-actions"

export async function ProductsOverview() {
  const products = await getAllProducts()

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.name}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
