import { FavoriteIcon } from "@/components/ui/icons/favorite-icon";
import { useLocalStorage } from "@/data/hooks/useLocalStorage";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FavoriteCount = styled.span`
  width: 16px;
  height: 16px;

  margin: -6px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor010};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;

export function FavoritesControl() {
  const [value] = useLocalStorage<string[]>("favorites-items", []);

  return (
    <Container>
      <FavoriteIcon />
      {value.length > 0 && <FavoriteCount>{value.length}</FavoriteCount>}
    </Container>
  );
}
