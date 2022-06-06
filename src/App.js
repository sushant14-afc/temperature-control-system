import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tempValue, setTempValue] = useState(10)
  const [tempColor, setTempColor] = useState('cold')

  const increaseTemp = () => {
    const newTemp = tempValue + 1
    setTempValue(newTemp)

    if (newTemp >= 15) {
      setTempColor('hot')
    }
  }

  const decreaseTemp = () => {
    const newTemp = tempValue - 1
    setTempValue(newTemp)

    if (newTemp < 15) {
      setTempColor('cold')
    }
  }

  return (
    <>

      <div className='container'>
        <h3>Temperature Control-System</h3>
        <div className='temp-display'>
          <div className={`temp-show ${tempColor}`}>
            <h1>{tempValue}°C</h1>
          </div>

        </div>
        <div className='butt'>
          <button className='plus' onClick={() => increaseTemp()}>+</button>
          <button className='minus' onClick={() => decreaseTemp()}>-</button>
        </div>
      </div>
    </>

  );
}

export default App;
