import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { passkey } from "better-auth/plugins/passkey";
import Database from "better-sqlite3";
import { redis } from "@/lib/redis";
import { openAPI } from "better-auth/plugins";

await redis.connect();

export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  plugins: [
    openAPI(),
    nextCookies(),
    passkey({
      rpID: "localhost",
      origin: process.env.BETTER_AUTH_URL,
    }),
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  secondaryStorage: {
    get: async (key) => {
      const value = await redis.get(key);
      return value ? value : null;
    },
    set: async (key, value, ttl) => {
      if (ttl) {
        await redis.set(key, value, { EX: ttl });
      } else {
        await redis.set(key, value);
      }
    },
    delete: async (key) => {
      await redis.del(key);
    },
  },
});
