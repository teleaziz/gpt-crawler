import { Config } from "./src/config";

// export const defaultConfig: Config = {
//   url: "https://www.aljazeera.com/news/2024/2/1/south-carolina-primary-set-to-test-bidens-support-among-black-voters",
//   match: "https://www.aljazeera.com//news/**/**/**/**",
//   maxPagesToCrawl: 200,
//   selector: "main",
//   outputFileName: "jazeera",
//   maxTokens: 2000000,
// };

// https://www.mayoclinic.org/diseases-conditions/baby-acne/symptoms-causes/syc-20369880

export const defaultConfig: Config = {
  url: "https://www.mayoclinic.org/diseases-conditions/index",
  match: "https://www.mayoclinic.org/diseases-conditions/**/symptoms-causes/**",
  maxPagesToCrawl: 40,
  selector: "article",
  outputFileName: "mayoclinic",
  maxTokens: 20000000,
};
