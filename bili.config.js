module.exports = {
  input: {
    index: "src/index.js",
  },
  output: {
    format: ["cjs-min", "esm-min"],
    moduleName: "ObsidianUI",
    extractCSS: false,
  },
  globals: {
    react: "React",
  },
  plugins: {
    postcss: {
      modules: true,
    },
  },
  extendConfig(config, { format }) {
    if (format === "esm") {
      config.output.fileName = "[name].module.js";
    }
    return config;
  },
  env: {
    NODE_ENV: "production",
  },
};
