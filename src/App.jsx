import Header from "./components/Header"
import Content from "./components/Content";
import {  Route, Routes } from "react-router-dom";

import { NotificationContainer } from "./components/NotificationContainer";

function App() {
  return (
    <>
     <Header/>
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path="/notification" element={<NotificationContainer/>}/>
        </Routes>
  
    </>
  );
}

export default App;
