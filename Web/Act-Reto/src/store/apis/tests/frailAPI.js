import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const frailApi = createApi({
    reducerPath: 'frail',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchFrail: builder.query({
                provideTags: ['Frail'],
                query: () => {
                    return {
                        url: `/getQuestionsFrail`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersFrail : builder.query({
                provideTags: ['AnswersFrail'],
                query: () => {
                    return {
                        url: `/getAnswersFrail`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchFrailQuery, useFetchAnswersFrailQuery } = frailApi;
export { frailApi };