import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input} from '@mui/material';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
      db.collection('messages')
      .orderBy("timestamp","desc")
      .onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>({id: doc.id, message : doc.data()})))
        
      });
  },[])

  useEffect(()=>{
      setUsername(prompt("please enter your Name"))
  },[])

  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("")
  }
 
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/512px-Facebook_Messenger_logo_2020.svg.png?20220118041828" style={{width:"100px"}}/>
      <h2>Hello Clever program</h2>
        <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
            <Input 
            className='app__input'
            value={input}
            placeholder='Enter a message......'
            onChange={event => setInput(event.target.value)} />
            <IconButton 
            className='app__iconButton'
            disabled={!input}
            variant='contained'
            color='primary'
            onClick={sendMessage}
            >
              <SendIcon/>
            </IconButton>
        </FormControl>
      </form>
      <FlipMove/>
      {
        messages.map(({id, message })=>(
          console.log(id)
        // <Message key={id} 
        // username={username} 
        // message={message} />
        ))
      }
      <FlipMove/>
    </div>
  );
}

export default App;
