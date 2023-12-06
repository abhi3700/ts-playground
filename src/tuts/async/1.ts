/**
 * Show how to use async/await with Promise
 */

// This is for allowing to have the same function name as found in other folders.
export {};

/// get name from url
async function getName(url: string): Promise<string> {
  const response = await fetch(url);
  const website = await response.text();
  return website;
}

// main function
async function main() {
  const url = "https://example.com";
  const website = await getName(url);
  console.log(website);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
