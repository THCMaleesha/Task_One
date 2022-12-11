import './App.css';
import React, { useEffect, useState } from 'react';
import {Form} from 'react-bootstrap';
import Axios from 'axios';

function App() {

  const [breed, setBreed] = useState([])
  useEffect(() => {
    var URL = 'https://dog.ceo/api/breeds/list/all';
    Axios 
    .get(URL)
    .then(res => {
      for(var a in res.data.message) {
        if(res.data.message[a].length !== 0)
          for(var b of res.data.message[a])
            breed.push(a + "/" + b)
        else
          breed.push(a)
        setBreed(prev => [...breed])
       }
    })
  }, [])
  
  return (
    <div className='app'>
      <Form>
        <Form.Group>
          <Form.Control as='select'>
            {breed.map(b => {
              return <option key={b}>{b}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>    
  );
}

export default App;
