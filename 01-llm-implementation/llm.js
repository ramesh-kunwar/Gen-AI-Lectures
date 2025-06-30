import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";
const API_KEY = "AIzaSyA7MlIoqZMiF-6lihZU15_fm9zKDSRE3xA";

const ai = new GoogleGenAI({ apiKey: API_KEY });
const History = [];
async function Chatting(userProblem) {
  History.push({
    role: "user",
    parts: [{ text: userProblem }],
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
  });

  History.push({
    role: "model",
    parts: [{ text: response.text }],
  });
  console.log("\n--------------------------------------------------");
  console.log(response.text);
  console.log("\n--------------------------------------------------");
}
async function main() {
  // const userProblem = readlineSync.question("Ask me anything-----");
  const userProblem = readlineSync.question(
    "\n***************************Ask me anything***************************\n"
  );
  await Chatting(userProblem);
  main();
}

await main();
