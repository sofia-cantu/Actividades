import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const group_typeApi = createApi({
    reducerPath: 'group_type',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchGroup_type: builder.query({
                provideTags: ['Group_type'],
                query: (id) => {
                    return {
                        url: `/getGroup_type/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editGroup_type : builder.mutation({
                invalidatesTags: ['Group_type'],
                query: (group_type) => {
                    return {
                        method : 'PUT',
                        url : `/updateGroup_type/${group_type.group_type_id}`,
                        body: {
                            group_type : group_type.group_type,
                            parent_group_type_id : group_type.parent_group_type_id,
                        },
                    };
                },
            }),
            deleteGroup_type : builder.mutation({
                invalidatesTags: ['Group_type'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteGroup_type/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchGroup_typeQuery, useEditGroup_typeMutation, useDeleteGroup_typeMutation } = group_typeApi;
export default group_typeApi;