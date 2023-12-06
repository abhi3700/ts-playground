async function main() {
  console.log("Hello, world!");
}

main()
  .catch(console.error)
  .finally(() => process.exit());
