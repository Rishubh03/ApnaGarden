import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const gardensApi = createApi({
	reducerPath: "gardensApi",
	baseQuery: fetchBaseQuery({ baseUrl:"http://192.168.0.108:8000/api/garden/" }),
	endpoints: (builder) => ({
		getGardens: builder.query({
			query: () => {
				return {
					url: "garden/",
					method: "GET",
				};
			},
		}),

	}),
});

export const { useGetGardensQuery } = gardensApi;