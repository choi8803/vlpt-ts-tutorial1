import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import { SampleProvider } from './SampleContext';
import ReducerSample from './ReducerSample';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }
  const onSubmit = (form: { name: string, description:string }) => {
    console.log(form);
  }
  return (
    // <div>
    //   <Greetings name="React" onClick={onClick} />
    //   <Counter />
    //   <MyForm onSubmit={onSubmit}/>
    // </div>
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
