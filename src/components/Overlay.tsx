interface Props {
  isClick: boolean;
  onClick: () => void;
}

function Overlay({ onClick, isClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`overlay ${isClick ? "overlay--show" : ""}`}
    ></div>
  );
}

export default Overlay;
