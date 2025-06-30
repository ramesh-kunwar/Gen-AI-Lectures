import readlineSync from "readline-sync";
import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyA7MlIoqZMiF-6lihZU15_fm9zKDSRE3xA";
// const ai = new GoogleGenAI({});

const ai = new GoogleGenAI({ apiKey: API_KEY });

const chat = ai.chats.create({
  model: "gemini-2.5-flash",

  history: [],
});

async function main() {
  const userProblem = readlineSync.question("\n Ask Me any thing \n");
  const response = await chat.sendMessage({
    message: userProblem,
  });
  console.log(
    "\n--------------------------------------------------------------------\n"
  );
  console.log(response.text);
  console.log(
    "\n--------------------------------------------------------------------\n"
  );
  main();
}

main();
