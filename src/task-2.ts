interface Product {
  readonly id: number;
  name: string;
  description?: string;
}
const product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};
console.log(`Product: ${JSON.stringify(product)}`);
