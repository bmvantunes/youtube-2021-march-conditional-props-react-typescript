export type DrawerProps = { fullName: string } & (
  | { shape: 'circle'; radius: number }
  | { shape: 'square'; width: number }
  | { shape: 'rectangle'; width: number; height: number }
);

export function Drawer(props: DrawerProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return <Drawer fullName="Bruno" shape="circle" radius={44} />;
}
