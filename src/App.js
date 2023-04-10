import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Table from './components/Table';
import data from './components/mock-data.json'


function App() {
  const [array, setArray] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fname: '',
    lname: '',
    birthdate: '',
    address1: '',
    address2: '',
    birthplace: '',
    pnumber: '',
    profilepic: ''
  })
  const [index, setIndex] = useState(null);
  const [bolin, setBolin] = useState(false);

  const deleteData = (i) => {
    let total = [...array]
    total.splice(i, 1)
    setArray(total)
  }

  const updateData = (i) => {
    let { fname, lname, birthdate, address1, address2, birthplace, pnumber } = array[i]
    setAddFormData({ fname, lname, birthdate, address1, address2, birthplace, pnumber })
    setBolin(true)
    setIndex(i)
  }

  return (
    <div className=" flex flex-col w-full sm:flex sm:flex-col md:flex md:flex-col lg:flex xl:flex lg:flex-row xl:flex-row bg-gradient-to-tr from-violet-300 to-violet-400 min-w-0">
      <InputForm array={array} setArray={setArray} addFormData={addFormData} index={index} bolin={bolin} setAddFormData={setAddFormData} setBolin={setBolin} />
      <Table array={array} updateData={updateData} deleteData={deleteData} />
    </div>
  );
}

export default App;
