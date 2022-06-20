import { Form } from './components/Form';
import scss from './App.module.scss';

function App() {
  return (
    <div className={scss.container}>
      <h1 className={scss.title}>Form</h1>
      <Form />
    </div>
  );
}

export default App;
