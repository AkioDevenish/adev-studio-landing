import { google } from "@ai-sdk/google";
import { generateText } from "ai";

process.env.GOOGLE_GENERATIVE_AI_API_KEY = "AIzaSyBOSewRKUB9umzCkk1c2UnOp7HpFXAiXJM";

async function main() {
  try {
    const { text } = await generateText({
      model: google("gemini-1.5-flash-latest"),
      prompt: "Hello",
    });
    console.log("Success gemini-1.5-flash-latest:", text);
  } catch (e: any) {
    console.error("Error gemini-1.5-flash-latest:", e.message);
  }

  try {
    const { text } = await generateText({
      model: google("gemini-1.5-flash-001"),
      prompt: "Hello",
    });
    console.log("Success gemini-1.5-flash-001:", text);
  } catch (e: any) {
    console.error("Error gemini-1.5-flash-001:", e.message);
  }

  try {
    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: "Hello",
    });
    console.log("Success gemini-1.5-flash:", text);
  } catch (e: any) {
    console.error("Error gemini-1.5-flash:", e.message);
  }
}

main();
