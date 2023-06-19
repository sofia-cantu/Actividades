import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const pam_testApi = createApi({
    reducerPath: 'pam_test',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchPam_test: builder.query({
                provideTags: ['Pam_test'],
                query: (id) => {
                    return {
                        url: `/getPam_test/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editPam_test : builder.mutation({
                invalidatesTags: ['Pam_test'],
                query: (pam_test) => {
                    return {
                        method : 'PUT',
                        url : `/updatePam_test/${pam_test.pam_test_id}`,
                        body: {
                            pam_id : pam_test.pam_id,
                            test_date : pam_test.test_date,
                            is_completed : pam_test.is_completed,
                        },
                    };
                },
            }),
            deletePam_test : builder.mutation({
                invalidatesTags: ['Pam_test'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deletePam_test/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPam_testQuery, useEditPam_testMutation, useDeletePam_testMutation } = pam_testApi;
export { pam_testApi };