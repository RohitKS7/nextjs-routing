import Link from "next/link";

export default function ProductList() {
  return (
    <main>
      <h1>ProductList</h1>

      <ul>
        <li>
          <Link href="/products/1_basket">basket</Link>
        </li>
        <li>
          <Link href="/products/2_hairpin">hairpin</Link>
        </li>
        <li>
          <Link href="/products/3_smartphone">smartphone</Link>
        </li>
      </ul>
    </main>
  );
}
