import { defineConfig } from "vitest/config";

export default defineConfig({
    // The 'define' property below ensures that all inline test code are removed after the npm run build command is executed
    // define: {
    //     'import.meta.vitest': 'undefined'
    // },
    test: {
        /* The line below tells vitest to search through .js and .ts files to see if there are tests configured in them and not just look for .test.js or .test.ts files */
        // includeSource: ['src/**/*.{js,ts}'], 
        coverage: {
            reporter: [
                'text', 
                'html'
            ]
        }
    }
});