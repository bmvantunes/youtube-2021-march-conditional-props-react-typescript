type DropdownProps<T> = T extends number | string
  ? {
      data: Array<string | number>;
      labelProp?: never;
      valueProp?: never;
    }
  : {
      data: Array<T>;
      labelProp: keyof T;
      valueProp: keyof T;
    };

export function Dropdown<T>(props: DropdownProps<T>) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return (
    <Dropdown
      data={[
        { id: 5, name: 'bruno' },
        { id: 6, name: 'joao' },
      ]}
      labelProp="name"
      valueProp="id"
    />
  );
}
