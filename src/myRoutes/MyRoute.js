import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from "../components/Menu";
import { List } from "../components/List";
import { FormStep1 } from "../components/FormStep1";
import { FormStep2 } from "../components/FormStep2";

export const MyRoute = () => {


  return (
    <BrowserRouter>
      
      <div className='layout'>
        {/* Header */}

        <Menu />



        {/* Contenido */}
        <Routes>

            <Route path="/" element={<List/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/step1" element={<FormStep1/>} />
            <Route path="/step2" element={<FormStep2/>} />

        </Routes>
      </div>



    </BrowserRouter>
  )
}
