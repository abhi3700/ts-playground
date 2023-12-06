// This is for allowing to have the same function name as found in other folders.
export {};
async function main() {
  console.log("Hello, world!");
}

main()
  .catch(console.error)
  .finally(() => process.exit());
