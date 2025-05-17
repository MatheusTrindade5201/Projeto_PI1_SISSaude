import { useState } from "react";
import TabsWrapper from "../Componentes/Tabs/TabsWrapper";
import Rodape from "../Componentes/Rodape";

function UpdateResidence() {
  let [currentTabIndex, setCurrentTabIndex] = useState(0);

  /* teria a função do get
  const [domicilio, setDomicilio] = useState()

  useEffect(()= >{

    const resposta = await façoOGet()

    setDomicilio(resposta)

  },[])
*/

  return (
    <>
      <div>
        <TabsWrapper
          currentTabIndex={currentTabIndex}
          /* respostaDoGet={domicilio} */
        />
        <Rodape setNumber={setCurrentTabIndex} />
      </div>
    </>
  );
}

export default UpdateResidence;
