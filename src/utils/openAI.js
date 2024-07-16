import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPEN_AI_KEY } from "./Constant";

// Access your API key as an environment variable.
 export const genAI = new GoogleGenerativeAI(OPEN_AI_KEY);

// async function run() {
//   // Choose a model that's appropriate for your use case.

// }

// run();