import Login from "./components/login";
import Home from "./components/Admin/home";
import PhotoForm from './components/Admin/registerLostObject';


function App() {
  return (
    <div className="flex w-full h-screen ">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Login/>
      </div>
      <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
      </div>
    </div>
  );
}

export default App;
