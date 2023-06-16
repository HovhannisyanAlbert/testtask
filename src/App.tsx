import React from 'react';
import Employe from './components/employe/Employe';
import {  Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import EmployeForm from './components/employe/EmployeForm';
import CreateTask from './components/tasks/CreateTask';
import AllTask from './components/tasks/AllTask';
import ShowTaskUser from './components/tasks/ShowTaskUser';
import SearchTask from "./components/tasks/SearchTask"

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Employe />} />
      <Route path='/employe/form' element={<EmployeForm />} />
      <Route path='/task' element={<CreateTask />} />
      <Route path='/alltask' element={<AllTask />} />
      <Route path='/showtask' element={<ShowTaskUser />} />
      <Route path='/search' element={<SearchTask />} />
     
    </Routes>
    
    </BrowserRouter>
   </>
  );
}

export default App;
