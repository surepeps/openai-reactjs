import React from 'react'

function ModelsList({ AIModels, selectModelAction }) {
  return (
    <div>
        <h1 className="title">OpenAI With ReactJs</h1>
        <div className="modelList">
            {
                AIModels.map((model) => {
                    return <div key={model.id} className="singleModel" onClick={() => selectModelAction(model.name, model.btnText, model.params)}>
                                <h2 className="modelName">{model.name}</h2>
                                <p className="modelDesc">{model.descriptiop}</p>
                            </div>
                })
            }
        </div>
    </div>
  )
}

export default ModelsList