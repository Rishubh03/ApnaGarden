import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const feedsApi = createApi({
	reducerPath: "feedsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.108:8000/api/feeds/" }),
	endpoints: (builder) => ({
		getFeeds: builder.query({
			query: () => {
				return {
					url: "post/",
					method: "GET",
				};
			},
		}),

	}),
});

export const { useGetFeedsQuery } = feedsApi;
