import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { FinalFormPage } from './pages/FinalFormPage';
import { FormPage } from './pages/FormPage';
import scss from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={scss.container}>
        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route path="/final-form" element={<FinalFormPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
