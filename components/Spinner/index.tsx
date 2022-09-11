import { Spinner } from "./styles";

const Spin = () => {
  return (
    <Spinner>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Spinner>
  );
};

export default Spin;
