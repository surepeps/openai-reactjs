// SELECTED MODELS
export const AIModels = [
    {
        name: "Q&A",
        id: "q&a",
        descriptiop: "Answer questions based on existing knowledge.",
        btnText: "Ask Question",
        params: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: "Grammer Correction",
        id: "grammerCorrection",
        descriptiop: "Corrects sentences into standard English.",
        btnText: "Correct Grammar",
        params: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Summarize for a 2nd grader",
        id: "summarizeForASecondGrader",
        descriptiop: "Translates difficult text into simpler concepts.",
        btnText: "Summarize",
        params: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "English to other languages",
        id: "englishToOtherLanguages",
        descriptiop: "Translates English text into French, Spanish and Japanese.",
        btnText: "Translate",
        params: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Movie to Emoji",
        id: "movieToEmoji",
        descriptiop: "Convert movie titles into emoji.",
        btnText: "Convert to Emoji",
        params: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },
    {
        name: "Explain code",
        id: "explainCode",
        descriptiop: "Explain a complicated piece of code.",
        btnText: "Explain Code",
        params: {
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        }
    },
    {
        name: "JavaScript to Python",
        id: "javascriptToPython",
        descriptiop: "Convert simple JavaScript expressions into Python.",
        btnText: "Convert Js To Python",
        params: {
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Chat",
        id: "chat",
        descriptiop: "Open ended conversation with an AI assistant.",
        btnText: "Send",
        params: {
            model: "text-davinci-003",
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        }
    },
]