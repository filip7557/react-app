import './App.css';

import Table from "./Table";
import Form from './Form';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Table />
        <Form />
        <Form isUpdate={true} className="hidden"/>
      </header>
    </div>
  );
}

export default App;
