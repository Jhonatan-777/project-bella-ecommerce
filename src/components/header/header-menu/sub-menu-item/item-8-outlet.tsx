import Link from "next/link";
import { ItemList } from "./item-template";

export default function Outlet() {
  return (
    <ItemList>
      <Link href="#">Outlet</Link>
    </ItemList>
  );
}
