import { useState } from "react";
import Slider from "./Slider";

const MIN = 10;
const MAX = 700;

const App = () => {

  const [ sliderValues, setSliderValues ] = useState([ 15, 100 ]);

  return (
    <div>
      <h1>My slider</h1>
      <p>Values:&nbsp;{JSON.stringify(sliderValues,null,"\t")}</p>
      <p>Min:&nbsp;{MIN}</p>
      <p>Max:&nbsp;{MAX}</p>
      <Slider
        width={600}
        min={MIN}
        max={MAX}
        onChange={setSliderValues}
        value={sliderValues}
      />
    </div>
  );
}
export default App;
