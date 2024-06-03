import { Route, Routes } from 'react-router-dom';
import RegisterObjectForm from './components/admin/RegisterObject';
import SeeListObjects from './components/admin/ObjectList';
import Admin from './components/admin/Admin';

function App() {
  return (
    <Routes>
      <Route path="/register-object" element={<RegisterObjectForm />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/see-list-objects" element={<SeeListObjects />} />
      {/* other routes... */}
    </Routes>
  );
}

export default App;