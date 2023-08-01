import satData from "./satData";
import Banner from "../App";
import Table from "../App";
import filterByType from "../App";
import setSat from "../App";
import displaySats from "../App";
import sat from "../App";
import orbitType from "../App";

const Buttons = () => {
<>
  <Banner />
  <Buttons
    filterByType={filterByType}
    setSat={setSat}
    displaySats={displaySats}
   />
   <Table sat={sat} />
</>
displaySats.map((sat, id) => {
  return (
    <div>
      <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
  
      </div>
  );
})}
<button onClick={() => setSat(satData)} key={orbitType}>All Orbits</button>


export default Buttons;