import { useEffect, useState } from 'react';
import firebase from './firebase';
import InputFrom from './components/inputFrom';
import InputView from './components/inputView';
import InputUpdate from './components/inputUpdate';
import NotFound from './components/notfound';
import Table from './components/table';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {

  const [data,setData] = useState([]);
  const database = axios.create({baseURL:'https://react-assessment-8a05a-default-rtdb.firebaseio.com'});
  useEffect(()=>{
    database.get('/users.json').then(response=>{
      setData(response.data);
    });
  },[]);

  //const [rows,setRows] = useState(data);
  const addNewRow = (newRow)=>{
    /*setRows((prevRow)=>{
      console.log([prevRow,newRow])
      return [...prevRow,newRow];
    });*/
    fetch(
      "https://react-assessment-8a05a-default-rtdb.firebaseio.com/users.json",
      {
        method: 'POST',
        body: JSON.stringify(newRow)
      }
    )
    window.location.reload();
  }

  const view = [''];
  const onView = (row)=>{
    view.shift();
    view.push(row);
  }

  const updateRow = (row)=>{
    const itemsRef = firebase.database().ref('users');
    itemsRef.child(row[0][0]).update(row[1]);
  }

  const removeRow = (row)=>{
    const itemsRef = firebase.database().ref('users');
    itemsRef.child(row).remove();
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <InputFrom onAddItem={addNewRow} />
            <Table items={data} idItem={onView} onRemove={removeRow} />
          </Route>
          <Route path="/view">
            <InputView idItem={view} items={data} />
          </Route>
          <Route path="/update">
            <InputUpdate onUpdateItem={updateRow} idItem={view} items={data} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
