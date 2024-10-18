import "./buttonStyles.css";

interface IButtonIconProps {
  icon: React.ReactElement;
  text: string;
  onClick?: () => void;
}
export default function ButtonIcon({
  icon,
  text,
  onClick,
}: IButtonIconProps): React.ReactNode {
  return (
    <div className="content-button" onClick={onClick}>
      {icon}
      {text}
    </div>
  );
}
