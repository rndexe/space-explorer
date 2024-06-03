import { defineConfig } from "vite";

export default defineConfig((config) => {
    // ...
    return {
        build: {
            sourcemap: config.mode == "development",
        },
    };
});
