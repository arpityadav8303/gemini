/*
 * Install the dependency: npm install @google/generative-ai
 * Make sure your .env has VITE_GEMINI_API_KEY=...
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const runChat = async (prompt) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // CHANGE THIS LINE: Use "gemini-pro" instead of "gemini-1.5-flash"
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error("Error fetching from Gemini:", error);
    return "Error: " + (error.message || "Unable to fetch response.");
  }
};

export default runChat;