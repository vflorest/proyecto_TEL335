import React, { useState } from 'react';
import RegisterObjectForm from './RegisterObjectForm';
import ObjectList from './ObjectList';
import RegisterRequestForm from './RegisterRequestForm';
import RequestList from './RequestList';

const LayoutAdmin = () => {
    const [activeComponent, setActiveComponent] = useState('');
  
    const handleButtonClick = (component) => {
      setActiveComponent(component);
    };
  
    const handleBackToMenu = () => {
      setActiveComponent('');
    };
  
    return (
        <div className="flex flex-col min-h-screen bg-gray-lightest">
          <header className="p-4 bg-blue text-white flex justify-between">
            <h1 className="text-2xl font-bold">Admin layout</h1>
            {activeComponent && <button onClick={handleBackToMenu} className="bg-gray text-white rounded p-2">Volver</button>}
          </header>
          <div className="flex-grow flex flex-col items-center justify-center space-y-8 p-8">
            {!activeComponent && (
              <>
                <div className="flex justify-between space-x-8">
                  <button onClick={() => handleButtonClick('RegisterObjectForm')} className="p-2 bg-green text-white rounded">Registrar Objeto</button>
                  <button onClick={() => handleButtonClick('ObjectList')} className="p-2 bg-green text-white rounded">Lista de Objetos</button>
                </div>
                <div className="flex justify-between space-x-8 ">
                  <button onClick={() => handleButtonClick('RegisterRequestForm')} className="p-2 bg-green text-gray-dark rounded">Registrar solicitud</button>
                  <button onClick={() => handleButtonClick('RequestList')} className="p-2 bg-green text-white rounded">Lista de Solicitudes </button>
                </div>
              </>
            )}
            {activeComponent === 'RegisterObjectForm' && <RegisterObjectForm />}
            {activeComponent === 'ObjectList' && <ObjectList />}
            {activeComponent === 'RegisterRequestForm' && <RegisterRequestForm />}
            {activeComponent === 'RequestList' && <RequestList />}
          </div>
          <footer className="p-4 bg-gray-dark text-white">
            <p>Lost & Found</p>
          </footer>
        </div>
      );
  };
  
  export default LayoutAdmin;