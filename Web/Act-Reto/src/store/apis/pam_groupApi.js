import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const pam_groupApi = createApi({
    reducerPath: 'pam_group',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchPam_group: builder.query({
                provideTags: ['Pam_group'],
                query: (id) => {
                    return {
                        url: `/getPam_group/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editPam_group : builder.mutation({
                invalidatesTags: ['Pam_group'],
                query: (pam_group) => {
                    return {
                        method : 'PUT',
                        url : `/updatePam_group/${pam_group.pam_group_id}`,
                        body: {
                            group_type_id : pam_group.group_type_id,
                            group_name : pam_group.group_name,
                            group_parent_id : pam_group.group_parent_id,
                        },
                    };
                },
            }),
            deletePam_group : builder.mutation({
                invalidatesTags: ['Pam_group'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deletePam_group/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPam_groupQuery, useEditPam_groupMutation, useDeletePam_groupMutation } = pam_groupApi;
export { pam_groupApi };