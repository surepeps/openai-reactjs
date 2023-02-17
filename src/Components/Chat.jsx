import React from 'react'

function Chat({ loadingStat, chats, setTextInput, processRequest, modelName }) {
  return (
    <div>
        <h1>{modelName}</h1>

        <div className="chat-env">
            <div className="allchat-cont">
                {

                chats.map((chat) => {
                        return (
                            <div key={chat.AI}>
                                <div className="leftChat">
                                    <p className="msg">You: {chat.Human}</p>
                                </div>
                                <div className="rightChat">
                                    <p className="msg ai">AI: {chat.AI}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            {
                loadingStat ? (
                    <div className='loader'>Please Wait......</div>
                ) : (
                    <div className="chat-inp">
                        <input  className='myInp' onChange={(e) => setTextInput(e.target.value)} type="text" />
                        <button onClick={(e) => processRequest()} className='send-btn'>Send</button>
                    </div>
                )
            }
            
        </div>
    </div>
  )
}

export default Chat