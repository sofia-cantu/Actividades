import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const mmseApi = createApi({
    reducerPath: 'mmse',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchMmse: builder.query({
                provideTags: ['Mmse'],
                query: () => {
                    return {
                        url: `/getQuestionsMMSE`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersMmse : builder.query({
                provideTags: ['AnswersMmse'],
                query: () => {
                    return {
                        url: `/getAnswersMMSE`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchMmseQuery, useFetchAnswersMmseQuery } = mmseApi;
export { mmseApi };