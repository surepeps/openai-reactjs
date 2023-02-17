import React from 'react'

function OpenAIConversation({btnText, Modelname, setTextInput, processRequest, reponseResult, loadingStat}) {
  return (
    <div>
        <h3 className='pageTitle'>{Modelname}</h3>

        <div className="conv">
            <textarea cols={50} rows={10} onChange={(e) => setTextInput(e.target.value)}></textarea>
            <button className="sendBtn" onClick={(e) => processRequest()}>{btnText}</button>

             {loadingStat ? (
                    <div className='loader'>Processing Request Please Wait......</div>
                ) : (
                    <p className='resultCon'>{reponseResult.length > 0 ? reponseResult : ''}</p>
                )
            }
        </div>
    </div>
  )
}

export default OpenAIConversation