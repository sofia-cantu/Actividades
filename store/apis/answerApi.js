import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const answerApi = createApi({
    reducerPath: 'answer',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchAnswer: builder.query({
                provideTags: ['Answer'],
                query: (id) => {
                    return {
                        url: `/getAnswer/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            addAnswer : builder.mutation({
                invalidatesTags: ['Answer'],
                query: (answer) => {
                    return {
                        method : 'POST',
                        url : '/addAnswer',
                        body: {
                            question_id : answer.question_id,
                            answer : answer.answer,
                            weight : answer.weight,
                        },
                    };
                },
            }),
            editAnswer : builder.mutation({
                invalidatesTags: ['Answer'],
                query: (answer) => {
                    return {
                        method : 'PUT',
                        url : `/updateAnswer/${answer.answer_id}`,
                        body: {
                            question_id : answer.question_id,
                            answer : answer.answer,
                            weight : answer.weight,
                        },
                    };
                },
            }),
            deleteAnswer : builder.mutation({
                invalidatesTags: ['Answer'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteAnswer/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchAnswerQuery, useAddAnswerMutation, useEditAnswerMutation, useDeleteAnswerMutation } = answerApi;
export const { reducerPath, reducer } = answerApi;