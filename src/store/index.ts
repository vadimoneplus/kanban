import { configureStore } from "@reduxjs/toolkit";
import { kanbanApi } from "./common/common.api";
import { kanbanReduser } from "./common/common.slice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [kanbanApi.reducerPath]: kanbanApi.reducer,
    kanban: kanbanReduser
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kanbanApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>