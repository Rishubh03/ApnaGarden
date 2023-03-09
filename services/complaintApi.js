import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const complaintApi = createApi({
	reducerPath: 'complaintApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.34.101:8000/api/complaint/' }),
	endpoints: (builder) => ({
		registerComplaint: builder.mutation({
			query: ({complaint,token}) => {
				return {
					url: 'createcomplaint/',
					method: 'POST',
					body: complaint,
					headers: {
						'Content-type': 'application/json',
						'Authorization': `Bearer ${token}`,
					}
				}
			}
		}),
		listComplaint: builder.query({
			query:(token) => {
				return {
					url:'listcomplaint/',
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`
					}
				}
			}
		}),
		detailComplaint: builder.query({
			query: ({token,id}) => {
				return {
					url: `${id}/`,
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
						'Authorization': `Bearer ${token}`,
					}
				}
				}
	}),
		deleteComplaint: builder.mutation({
			query: ({token,id}) => {
				return{
					url: `${id}/`,
					method: 'DELETE',
					headers: {
						'Content-type': 'application/json',
						'Authorization': `Bearer ${token}`,
				}
			}
		}
		}),

})
});

export const { useRegisterComplaintMutation, useListComplaintQuery, useDetailComplaintQuery,
				useDeleteComplaintMutation	 } = complaintApi