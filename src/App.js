import { FinalForm } from './components/FinalForm';
import scss from './App.module.scss';

function App() {
  return (
    <div className={scss.container}>
      <h1 className={scss.title}>Final Form</h1>
      <FinalForm />
    </div>
  );
}

export default App;
