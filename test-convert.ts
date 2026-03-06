import { convertToModelMessages } from "ai";

async function main() {
  const incomingMessages = [
    {
      role: "user",
      content: "hi"
    }
  ];

  try {
    const modelMessages = await convertToModelMessages(incomingMessages as any);
    console.log(JSON.stringify(modelMessages, null, 2));
  } catch (e: any) {
    console.error(e);
  }
}
main();
