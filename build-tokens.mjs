import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";
import StyleDictionary from "style-dictionary";

const extendedDictionary = StyleDictionary.extend({
  source: ['styles/colors.json', 'styles/themes/**/*.json'],
  platforms: {
    web: {
      transformGroup: 'css',
      buildPath: 'styles/tokens/css/',
      transforms: ['name/cti/snake'],
      files: [
        {
          destination: 'variables-light.css',
          format: 'css/variables',
          filter: (token) => {
            return (
              token.filePath.includes('colors.json') ||
              token.filePath.includes('themes/light.json')
            )
          },
        },
        {
          destination: 'variables-dark.css',
          format: 'css/variables',
          filter: (token) => {
            return (
              token.filePath.includes('colors.json') ||
              token.filePath.includes('themes/dark.json')
            )
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'styles/tokens/ts/',
      transforms: ['name/cti/snake', 'color/hex8'],
      prefix: 'js_',
      files: [
        {
          format: 'javascript/es6',
          destination: 'variables.ts',
        },
      ],
    },
  },
}).extend(makeSdTailwindConfig({
  type: "all",
  buildPath: "./custom-tailwind-config/"
}));

extendedDictionary.buildAllPlatforms();

console.log("Design tokens built successfully.");