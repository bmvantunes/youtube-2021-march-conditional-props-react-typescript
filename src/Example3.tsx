type PanelProps = {};

export function Panel(props: PanelProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return (
    <>
      Debug While Developing
    </>
  );
}
