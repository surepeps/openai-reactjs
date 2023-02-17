import { useState } from 'react'
import './App.css'
import ModelsList from './Components/ModelsList'
import OpenAIConversation from './Components/OpenAIConversation'
import { AIModels } from './Seeder/AIModels'
import { Configuration, OpenAIApi } from 'openai'
import Chat from './Components/Chat'

function App() {
  const [modelName, setModelName] = useState('');
  const [btnText, setBtnText] = useState('');
  const [params, setParams] = useState({});
  const [textInput, setTextInput] = useState('');
  const [reponseResult, setResponseResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);

  // OpenAI Configuration
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  // Selecting Model Function
  const selectModelAction = (name, btnText, params) => {
      setBtnText(btnText);
      setModelName(name);
      setParams(params);
  }

  // get params length if any model has been clicked on
  const getObjectSize = Object.values(params).length;

  // Button Function action
  const processRequest = async () => {
    let newParams = {...params, prompt: textInput}

    setLoading(true);

    const response = await openai.createCompletion(newParams);

    if (getObjectSize > 0 && Object.values(params)[getObjectSize-1].length != 2) {
      setResponseResult(response.data.choices[0].text)
    }else{
      setChat([...chat, {Human: textInput, AI: response.data.choices[0].text}])
    }

    setLoading(false);
  }

  return (
    <div className="App">
      {
        getObjectSize === 0 ?
        (<ModelsList AIModels={AIModels} selectModelAction={selectModelAction} />)
        : Object.values(params)[getObjectSize-1].length == 2 ?
        <Chat loadingStat={loading} chats={chat} setTextInput={setTextInput} processRequest={processRequest} modelName={ modelName }/> :
        (<OpenAIConversation loadingStat={loading} Modelname={modelName} btnText={btnText} setTextInput={setTextInput} reponseResult={reponseResult} processRequest={processRequest} />)
      }
      
    </div>
  )
}

export default App
