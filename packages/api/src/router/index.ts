import { router } from "../trpc";
import { authRouter } from "./auth";

export const appRouter = router({
  authorization: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
