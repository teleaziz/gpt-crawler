import { defaultConfig } from "../config.js";
import { crawl, write, generateJsonLinesFile } from "./core.js";

if (process.argv[2].startsWith("jsonl-")) {
  generateJsonLinesFile(process.argv[2].replace("jsonl-", ""));
} else {
  await crawl(defaultConfig);
  await write(defaultConfig);
}
