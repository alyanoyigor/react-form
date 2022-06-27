import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { FinalFormPage } from './pages/FinalFormPage';
import { FormPage } from './pages/FormPage';
import { Container } from './components/Container';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route path="/final-form" element={<FinalFormPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
