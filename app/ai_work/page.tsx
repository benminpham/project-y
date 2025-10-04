'use client';
import { GoogleGenAI } from "@google/genai";
import { loadEnvConfig } from '@next/env'


const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function ai_call() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

await ai_call();

export default async function ai_work(){
    
    return (
        <div>
            <h2>Test here</h2>
            <button onClick={ai_call}>Click Here to get AI ai_call</button>
        </div>
    )
}