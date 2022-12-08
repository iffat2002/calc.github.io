import { useState } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops =['/', '*', '+', '-','.','='];

  const clickHandler = value =>{
    if ((ops.includes(value) && calc === '') ||(ops.includes(value) && ops.includes(calc.slice(-1))) ) 
    {
      return;
    }
    console.log('operators clicked');
    setCalc(calc+value);
    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  
  const createDigits = () => {
    const digits=[];
  for(let i=0; i<=9; i++)
  {
      digits.push(
            <button onClick={() => clickHandler(i.toString())} key={i}>
                                                                {i}
                                                              </button>)
  }
  return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const removeString = () => {
    setCalc(calc.toString().slice(0,-1));

  }
  const deleteString=() => {
    setCalc('');
    setResult('');
  }
  return (
    <div className="App">
       <div>
      <footer className='footer'>
        Designed and Coded By <a href="https://codepen.io/iffat-fatyma/">Iffat Fatima </a>
      </footer>
      </div>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : '' }&nbsp;
          {calc || '0'}
        </div>

      <div className='operators'>
      <button onClick={deleteString}>AC</button>
      <button onClick={removeString}>DEL</button>
      <button onClick={() => clickHandler('/')}>/</button>
      <button onClick={() => clickHandler('*')}>x</button>
      <button onClick={() => clickHandler('-')}>-</button>
      <button onClick={() => clickHandler('+')}>+</button>
      </div>
      <div className='digits'>
      {createDigits()}
      <button onClick={calculate}>=</button>
      <button onClick={() => clickHandler('.')}>.</button>
      </div>
      </div>
     

    </div>
  );
}

export default App;
