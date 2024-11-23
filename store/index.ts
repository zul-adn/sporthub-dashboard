import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from '@/store/themeConfigSlice';
import AuthSlice from "@/module/auth/lib/auth.slice";

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    auth: AuthSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
// @ts-ignore
export type RootState = ReturnType<IRootState['getState']>
// @ts-ignore
export type AppDispatch = IRootState['dispatch']
