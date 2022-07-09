import "./index.css";
import photoclg from "./CollegeLogo.png";
import face from "./face.png";
function RealCard() {
  return (
    <>
      <div className="real">
        <h1>Mayank Singh (HRBP, Amazon)</h1>
        <img src={photoclg} />
        <h4>The University Of Western Australia</h4>
      </div>
      <div className="face">
        <img src={face} />
      </div>
    </>
  );
}

export default RealCard;
