type DrawerProps = {};

export function Drawer(props: DrawerProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return (
    <>
      Debug While Developing
    </>
  );
}
