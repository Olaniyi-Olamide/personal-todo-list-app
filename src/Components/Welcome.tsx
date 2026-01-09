interface Props {
  children: React.ReactNode;
}

export default function Welcome({ children }: Props) {
  return <>{children}</>;
}
