import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const feedsApi = createApi({
	reducerPath: "feedsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.105:8000/api/feeds/" }),
	endpoints: (builder) => ({
		getFeeds: builder.query({
			query: () => {
				return {
					url: "list/",
					method: "GET",
				};
			},
		}),
		createPost: builder.mutation({
			query: ({post,token}) => {
				return {
					url: 'create/',
					method: 'POST',
					body: post,
					headers: {
						'Content-type': 'application/json',
						'Authorization': `Bearer ${token}`,
					}
				}
			}
		}),

	}),
});

export const { useGetFeedsQuery, useCreatePostMutation } = feedsApi;
