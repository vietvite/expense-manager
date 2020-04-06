import React from 'react';
import Filter from './components/filter';
import DataTable from './components/dataTable';
import Remain from './components/remain';
import Modal from './components/modal';

function App() {
  return (
    <div>
      <header>MY EXPENSE MANAGER</header>
      <div class="container">
        <div class="wrapper">
          <Filter />

          <DataTable />

          <Remain />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
