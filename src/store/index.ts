import carrinhoReducer from './reducers/carrinho'
import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer // ← Adicione o reducer da API aqui
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // ← Adicione o middleware da API aqui
})

export type RootReducer = ReturnType<typeof store.getState>
