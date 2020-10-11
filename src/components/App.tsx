import React from "react";

import Header from "./Header";
import ASide from "./ASide";
import Main from "./Main";

function App() {
  return (
<>
    <Header />
    <div className='section columns'>
     <Main />
     <ASide/>
    </div>
    </>
  );
}

export default App;
