async function main() {
  const apiKey = "AIzaSyBOSewRKUB9umzCkk1c2UnOp7HpFXAiXJM";
  const url = 'https://generativelanguage.googleapis.com/v1beta/models?key=' + apiKey + '&pageSize=100';
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.models) {
        data.models.forEach((m: any) => console.log(m.name, m.supportedGenerationMethods));
    } else {
        console.log(data);
    }
  } catch(e) {
    console.error(e);
  }
}
main();
