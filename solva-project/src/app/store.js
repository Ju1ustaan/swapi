import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

import dataListReducer from 'entities/List/model/dataListSlice';
import detailsReducer from 'entities/Details/model/detailsSlice';
import paginationReducer from 'entities/Pagination/model/paginationSlice';
import additionalReducer from 'entities/Additional/model/AdditionalSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'dataList'], 
};

const rootReducer = combineReducers({
    list: dataListReducer,
    details: detailsReducer,
    pagination: paginationReducer,
    additional: additionalReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }).concat(thunk),
});

export const persistor = persistStore(store);
