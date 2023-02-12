import { useState } from "react";

export const Clicker = () => {

    const [clicks, setClicks] = useState(0);

    const clickHandrelr = (e) => {
      console.log(e);
      setClicks(c => c + 1) // така съм сигурна, че винаги старата стойност е обновена!
    }
    
    const dangerClicks = clicks > 20;

  if(clicks >= 30){
    return (
      <h1>Finished Clicks</h1>
    )
  }

    return (
      <div>
      {dangerClicks && <h2>Danger Clicks</h2>}
      {clicks > 10 
      ? <h3>Medium Clicks</h3> 
      : <h4>Normal Clicks</h4> 
      }
      <button onClick={clickHandrelr}>{clicks}</button>
      </div>
    )
}