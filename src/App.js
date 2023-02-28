import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { addText } from './redux/textSlice';
import { marked } from 'marked';

function App() {
  const dispatch = useDispatch();
  const {text} = useSelector((state) => state.editText)
  const output = marked.parse(text)
  console.log(output);

  function middleMan() {
    let myTextarea = document.getElementById("editor");
    dispatch(addText(myTextarea.value));
  }

  

  return (
    <div className="App">
      <textarea id="editor" onChange={middleMan} defaultValue= {text} />

      <div id= "preview" dangerouslySetInnerHTML={{__html: output}}> 
        
      </div>
    </div>
  );
}

export default App;
