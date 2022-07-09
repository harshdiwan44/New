import "./index.css";
import Cards from "./Card";
function ColorfulText({ children }) {
  return <span style={{ color: "#164aa5" }}>{children}</span>;
}
function PartnerUniverse() {
  return (
    <div class="md:container md:mx-auto scale-75">
      <div className="ghj">
        <h1 class="text-left ...">
          <ColorfulText> Student Testimonials </ColorfulText>
        </h1>
      </div>

      <div>
        {" "}
        <Cards />
      </div>
    </div>
  );
}

export default PartnerUniverse;
