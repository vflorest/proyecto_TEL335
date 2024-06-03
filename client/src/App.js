import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Admin/home"; // Aquí va la ruta de la página principal de admin
import PhotoForm from './components/Admin/registerLostObject';


function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/"
          element = {
            <div className="flex w-full h-screen ">
              <div className="w-full flex items-center justify-center lg:w-1/2">
                <Login id="loginInfo"/>
              </div>
              <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
              </div>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/register-lost-object" element={<PhotoForm />} /> {/* Ejemplo de otra ruta */}
      </Routes>
    </Router>
    
  );
}

export default App;
