import { Route, Routes } from 'react-router-dom';


import LayoutAdmin from './components/admin/LayoutAdmin';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<LayoutAdmin />} />
      {/* other routes... */}
    </Routes>
  );
}

export default App;