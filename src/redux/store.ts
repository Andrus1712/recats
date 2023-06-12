import { Action, AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { persistReducer, persistStore } from "redux-persist";
import { default as storage, default as storageSession } from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import authSlice from "./states/authSlice";
import counterSlice from "./states/counterSlice";
import messageSlice from "./states/messageSlice";


const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: []
}
const userPersistConfig = {
    key: 'auth',
    storage: storageSession,
    whitelist: ["_token"]
}

const reducer = {
    auth: persistReducer(userPersistConfig, authSlice),
    message: messageSlice,
    counter: counterSlice
}

const rootReducer = combineReducers(reducer);

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger]
});

export const persistor = persistStore(store)

export type AppState = ReturnType<typeof rootReducer>;

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;