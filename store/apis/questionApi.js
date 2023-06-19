import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const questionApi = createApi({
    reducerPath: 'question',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchQuestion: builder.query({
                provideTags: ['Question'],
                query: (id) => {
                    return {
                        url: `/getQuestion/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            addQuestion : builder.mutation({
                invalidatesTags: ['Question'],
                query: (question) => {
                    return {
                        method : 'POST',
                        url : '/addQuestion',
                        body: {
                            test_id : question.test_id,
                            question : question.question,
                            sub_question : question.sub_question,
                        },
                    };
                },
            }),
            editQuestion : builder.mutation({
                invalidatesTags: ['Question'],
                query: (question) => {
                    return {
                        method : 'PUT',
                        url : `/updateQuestion/${question.question_id}`,
                        body: {
                            test_id : question.test_id,
                            question : question.question,
                            sub_question : question.sub_question,
                        },
                    };
                },
            }),
            deleteQuestion : builder.mutation({
                invalidatesTags: ['Question'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteQuestion/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchQuestionQuery, useAddQuestionMutation, useEditQuestionMutation, useDeleteQuestionMutation } = questionApi;
export default questionApi;