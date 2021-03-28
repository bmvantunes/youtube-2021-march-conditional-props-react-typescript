type PanelProps =
  | { collapsable: true; defaultCollpsed?: boolean }
  //| { collapsable: true; defaultCollpsed?: true }
  | { collapsable?: never; defaultCollpsed?: never };

export function Panel(props: PanelProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return <Panel collapsable defaultCollpsed={false}  />;
}
