import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const pam_test_resultApi = createApi({
    reducerPath: 'pam_test_result',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchPam_test_result: builder.query({
                provideTags: ['Pam_test_result'],
                query: (id) => {
                    return {
                        url: `/getPam_test_result/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editPam_test_result : builder.mutation({
                invalidatesTags: ['Pam_test_result'],
                query: (pam_test_result) => {
                    return {
                        method : 'PUT',
                        url : `/updatePam_test_result/${pam_test_result.pam_test_result_id}`,
                        body: {
                            pam_test_id : pam_test_result.pam_test_id,
                            test_id : pam_test_result.test_id,
                            test_result : pam_test_result.test_result,
                            recommendation : pam_test_result.recommendation,
                        },
                    };
                },
            }),
            deletePam_test_result : builder.mutation({
                invalidatesTags: ['Pam_test_result'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deletePam_test_result/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPam_test_resultQuery, useEditPam_test_resultMutation, useDeletePam_test_resultMutation } = pam_test_resultApi;
export { pam_test_resultApi };