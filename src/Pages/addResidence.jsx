import { useState } from "react";
import TabsWrapper from "../Componentes/Tabs/TabsWrapper";
import Rodape from "../Componentes/Rodape";

function AddResidence() {
  let [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <>
      <div>
        <TabsWrapper currentTabIndex={currentTabIndex} />
        <Rodape setNumber={setCurrentTabIndex} />
      </div>
    </>
  );
}

export default AddResidence;
