function samplePromise() {
  return Promise.resolve("hello world");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
