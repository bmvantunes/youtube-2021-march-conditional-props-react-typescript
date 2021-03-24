type DropdownProps = {};

export function Dropdown(props: DropdownProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return (
    <>
      Debug While Developing
    </>
  );
}
