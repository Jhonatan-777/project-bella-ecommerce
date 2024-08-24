import Link from "next/link";
import { ItemList } from "./item-template";

export default function News() {
  return (
    <ItemList>
      <Link href="#">Novidades</Link>
    </ItemList>
  );
}
