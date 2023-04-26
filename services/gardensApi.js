import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const gardensApi = createApi({
	reducerPath: "gardensApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.105:8000/api/garden/" }),
	endpoints: (builder) => ({
		getGardens: builder.query({
			query: () => {
				return {
					url: "garden/",
					method: "GET",
				};
			},
		}),
		getGardenById: builder.query({
			query: (id) => {
				return {
					url: `ratings/${id}`,
					method: "GET",
				};
			},
		}),
		getGardenRatings: builder.query({
			query: (id) => {
				return {
					url: `ratings/list/${id}`,
					method: "GET",
				};
			},
		}),

	}),
});

export const { useGetGardensQuery } = gardensApi;