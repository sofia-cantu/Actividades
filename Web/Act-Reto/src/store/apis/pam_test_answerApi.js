import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const pam_test_answerApi = createApi({
    reducerPath: 'pam_test_answer',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchPam_test_answer: builder.query({
                provideTags: ['Pam_test_answer'],
                query: (id) => {
                    return {
                        url: `/getPam_test_answer/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editPam_test_answer : builder.mutation({
                invalidatesTags: ['Pam_test_answer'],
                query: (pam_test_answer) => {
                    return {
                        method : 'PUT',
                        url : `/updatePam_test_answer/${pam_test_answer.pam_test_answer_id}`,
                        body: {
                            pam_test_result_id : pam_test_answer.pam_test_result_id,
                            answer_id : pam_test_answer.answer_id,
                        },
                    };
                },
            }),
            deletePam_test_answer : builder.mutation({
                invalidatesTags: ['Pam_test_answer'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deletePam_test_answer/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPam_test_answerQuery, useEditPam_test_answerMutation, useDeletePam_test_answerMutation } = pam_test_answerApi;
export { pam_test_answerApi };