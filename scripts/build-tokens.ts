import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to convert hex to HSL
function hexToHSL(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hex to RGB
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  // Convert to percentages and degrees
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// Helper function to resolve nested token references
function resolveTokenReference(tokens: any, reference: string): string {
  // Remove { and } from reference
  const cleanRef = reference.replace(/[{}]/g, '');

  // Split the reference path
  const refParts = cleanRef.split('.');

  let currentValue = tokens;
  for (const part of refParts) {
    currentValue = currentValue[part];
    if (!currentValue) {
      console.warn(`Could not resolve reference: ${reference}`);
      return reference;
    }
  }

  return currentValue;
}

// Function to process tokens and map to Tailwind configuration
function processTokens(tokens: any, allTokens: any) {
  const tailwindConfig: any = {
    colors: {
      // Preserve existing categories
      background: `hsl(var(--background))`,
      foreground: `hsl(var(--foreground))`,
      border: `hsl(var(--border))`,
      input: `hsl(var(--input))`,
      ring: `hsl(var(--ring))`,

      // Primary colors
      primary: {
        DEFAULT: `hsl(var(--primary))`,
        foreground: `hsl(var(--primary-foreground))`,
      },

      // Secondary colors
      secondary: {
        DEFAULT: `hsl(var(--secondary))`,
        foreground: `hsl(var(--secondary-foreground))`,
      },

      // Other existing categories
      muted: {
        DEFAULT: `hsl(var(--muted))`,
        foreground: `hsl(var(--muted-foreground))`,
      },
      accent: {
        DEFAULT: `hsl(var(--accent))`,
        foreground: `hsl(var(--accent-foreground))`,
      },
      destructive: {
        DEFAULT: `hsl(var(--destructive))`,
        foreground: `hsl(var(--destructive-foreground))`,
      },

      // Map Figma tokens to new variables
      brand: {}
    }
  };

  // Process color tokens from Figma
  const processColorTokens = (category: string, tokens: any, prefix: string = '') => {
    Object.entries(tokens).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // Recursively process nested objects
        processColorTokens(category, value, prefix ? `${prefix}-${key}` : key);
      } else if (typeof value === 'string') {
        // Resolve any references
        const resolvedValue = value.startsWith('{')
          ? resolveTokenReference(allTokens, value)
          : value;

        // Convert to HSL
        const hslValue = hexToHSL(resolvedValue);

        // Determine variable name
        const varName = prefix
          ? `--${category}-${prefix}-${key}`.toLowerCase().replace(/\./g, '-')
          : `--${category}-${key}`.toLowerCase().replace(/\./g, '-');

        // Map to Tailwind configuration
        if (category === 'text') {
          // Handle text colors
          tailwindConfig.colors[key] = `hsl(var(${varName}))`;
        } else if (category === 'bg') {
          // Handle background colors
          tailwindConfig.colors.brand[key] = `hsl(var(${varName}))`;
        } else if (category === 'icon') {
          // Handle icon colors
          tailwindConfig.colors.brand[`icon-${key}`] = `hsl(var(${varName}))`;
        } else if (category === 'border') {
          // Handle border colors
          tailwindConfig.colors.brand[`border-${key}`] = `hsl(var(${varName}))`;
        }
      }
    });
  };

  // Process each token category
  Object.entries(tokens).forEach(([category, categoryTokens]) => {
    processColorTokens(category, categoryTokens);
  });

  return tailwindConfig;
}

// Main token compilation function
async function compileTokens() {
  const tokenDir = path.join(__dirname, '../styles');
  const outputDir = path.join(__dirname, '../styles');

  // Read all token files
  const tokenFiles = ['dark.json', 'light.json', 'primitive.json'];
  const allTokens: any = {};

  // First pass: read all tokens
  for (const file of tokenFiles) {
    const filePath = path.join(tokenDir, file);
    const fileContents = await fs.readFile(filePath, 'utf8');
    allTokens[path.basename(file, '.json')] = JSON.parse(fileContents);
  }

  // Second pass: process and resolve tokens
  const processedTokens: any = {};
  for (const [filename, tokens] of Object.entries(allTokens)) {
    processedTokens[filename] = processTokens(tokens, allTokens);
  }

  // Write processed tokens to a new file
  const outputFile = path.join(outputDir, 'tailwind-tokens.json');
  await fs.writeFile(outputFile, JSON.stringify(processedTokens, null, 2));

  console.log('Tokens compiled successfully!');

  return processedTokens;
}

// Run the compilation
compileTokens().catch(console.error);