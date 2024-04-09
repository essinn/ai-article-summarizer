import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article'

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    Middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(artcleApi.middleware)
});