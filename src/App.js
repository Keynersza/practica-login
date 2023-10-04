import logo from './logo.svg';
import './App.css';
import { Create } from './controllers/Create';
import FormRegister from './page/FormRegister';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormLogin from './page/FormLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='sesion' element = {<FormLogin/>} />
        <Route path='register' element = {<FormRegister/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
