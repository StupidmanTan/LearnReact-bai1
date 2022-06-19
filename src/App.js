/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Square from './square';


function App() {
  return (
    <div className="App">
   
        <div>
          <Square />
          <Square />
          <Square />
          <Counter initnumber = '0' />
        </div>
       
    </div>
  );
}

export default App;
