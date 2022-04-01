
import './App.css';
import Listuser from './components/Listuser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Listuser />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/edituser/:id' element={<Edituser />} />
        </Routes>
      </BrowserRouter>

      
     

  );
}

export default App;
