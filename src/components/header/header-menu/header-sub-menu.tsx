import styled from "styled-components";
import { Poppins } from "next/font/google";

//item do sub menu de header
import Season from "./sub-menu-item/item-1-season";
import News from "./sub-menu-item/item-2-news";
import Feminine from "./sub-menu-item/item-3-feminine";
import Masculine from "./sub-menu-item/item-4-masculine";
import Childish from "./sub-menu-item/item-5-childish";
import Sporty from "./sub-menu-item/item-6-sporty";
import Marks from "./sub-menu-item/item-7-marks";
import Outlet from "./sub-menu-item/item-8-outlet";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ContainerList = styled.ul`
  width: 90%;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function SubMenu() {
  return (
    <ContainerList className={poppins.className}>
      <Season />
      <News />
      <Feminine />
      <Masculine />
      <Childish />
      <Sporty />
      <Marks />
      <Outlet />
    </ContainerList>
  );
}
