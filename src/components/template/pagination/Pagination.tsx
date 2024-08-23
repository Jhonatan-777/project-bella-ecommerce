export interface PaginationProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagination(props: PaginationProps) {
  return <main className={props.className ?? ""}>{props.children}</main>;
}
