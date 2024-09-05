interface FavoriteIconProps {
  color?: string;
}

export function FavoriteIcon({ color = "#30706F" }: FavoriteIconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16665 3.5C4.94548 3.5 2.33331 6.08533 2.33331 9.275C2.33331 11.8498 3.35415 17.9608 13.4026 24.1383C13.5826 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6666 11.8498 25.6666 9.275C25.6666 6.08533 23.0545 3.5 19.8333 3.5C16.6121 3.5 14 7 14 7C14 7 11.3878 3.5 8.16665 3.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
