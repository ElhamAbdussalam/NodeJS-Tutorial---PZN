function samplePromise() {
  return Promise.resolve("hello world");
}

const name = await samplePromise();
console.info(name);
