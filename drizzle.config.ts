// import type {Config} from "drizzle-kit";

// export default {
//   schema: "./src/db/schema",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,

//     // Temporary local database
//     // user: process.env.DATABASE_USER!,
//     // password: process.env.DATABASE_PASSWORD!,
//     // database: process.env.DATABASE_NAME!,
//     // host: process.env.DATABASE_HOST!,
//   },
// } satisfies Config;

import { defineConfig } from "drizzle-kit"
export default defineConfig({
    schema: "./src/db/schema",
    dialect: "postgresql", // "postgresql" | "mysql"
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
})