import "./index.css";
import Navb from "./Navbar";
import Cards from "./Card";
function ColorfulText({ children }) {
  return <span style={{ color: "#164aa5" }}>{children}</span>;
}
function PartnerUniverse() {
  return (
    <div className="hal">
      <div class="md:container md:mx-auto scale-75">
        <h1 class="text-left ...">
          <ColorfulText> Partner Universities </ColorfulText>
        </h1>

        <div class="grid grid-cols-2 gap-4">
          <div>
            {" "}
            <Navb />
          </div>
          <div>
            {" "}
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerUniverse;
