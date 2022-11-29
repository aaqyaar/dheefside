import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

const absolutePathAliases: { [key: string]: string } = {};
const rootPath = path.resolve(__dirname, "src");

const rootContents = fs.readdirSync(rootPath).map((file) => {
  const filePath = path.resolve(rootPath, file);
  const stat = fs.statSync(filePath);
  return {
    name: file,
    path: filePath,
    isDirectory: stat.isDirectory(),
  };
});

const pages = rootContents.filter((file) => file.isDirectory);

pages.forEach((page) => {
  absolutePathAliases[page.name] = page.path;
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },
  plugins: [react()],
});
