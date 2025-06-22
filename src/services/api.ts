import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  reducerPath: 'api', // ← ESSENCIAL para o Redux saber onde guardar os dados da API
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api
export default api
