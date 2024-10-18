interface IInputProps {
  type: string;
  value: string;
}
export default function Input({
  type,
  value,
}: IInputProps): React.ReactElement {
  return <input value={value} type={type} />;
}
