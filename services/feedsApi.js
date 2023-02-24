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
		createPost: builder.mutation({
			query: ({post,token}) => {
				return {
					url: 'post/create/',
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
