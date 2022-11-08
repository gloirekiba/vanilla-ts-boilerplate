const add = async (a: number, b: number) => {
  return a + b;
};

(async () => {
  const result = await add(1, 2);
  console.log(result);
})();
