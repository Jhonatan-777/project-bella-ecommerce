import Link from "next/link";
import { ItemList } from "./item-template";

export default function Childish() {
  return (
    <ItemList>
      <Link href="#">Infantil</Link>
    </ItemList>
  );
}
