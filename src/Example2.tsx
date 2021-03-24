type OneOrTheOtherProps = {};

export function OneOrTheOther(props: OneOrTheOtherProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return (
    <>
      Debug While Developing
    </>
  );
}
