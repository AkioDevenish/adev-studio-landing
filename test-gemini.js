require('dotenv').config({ path: '.env.local' });
const { google } = require('@ai-sdk/google');
const { generateText } = require('ai');

async function main() {
  try {
    const { text } = await generateText({
      model: google('gemini-1.5-flash-latest'),
      prompt: 'Hello',
    });
    console.log("Success:", text);
  } catch (e) {
    console.error("Error:", e.message);
  }
}
main();
