import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages } from "ai";

process.env.GOOGLE_GENERATIVE_AI_API_KEY = "AIzaSyBOSewRKUB9umzCkk1c2UnOp7HpFXAiXJM";

async function main() {
  const incomingMessages = [
    {
      id: "welcome",
      role: "assistant",
      parts: [{ type: "text", text: "Hey! 👋 I'm the ADEV Studio assistant..." }],
    },
    {
      id: "user1",
      role: "user",
      parts: [{ type: "text", text: "hi" }]
    }
  ];

  try {
    const modelMessages = await convertToModelMessages(incomingMessages as any);
    console.log(JSON.stringify(modelMessages, null, 2));

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: "You are the ADEV Studio AI assistant.",
      messages: modelMessages,
    });
    
    // Just to see if it doesn't throw on init
    const stream = result.toTextStreamResponse();
    console.log("Success streaming.");
  } catch (e: any) {
    if (e.errors) {
      console.error(JSON.stringify(e.errors, null, 2));
    } else {
      console.error(e);
    }
  }
}
main();
