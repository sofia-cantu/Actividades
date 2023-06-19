import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gdsApi = createApi({
    reducerPath: 'gds',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchGds: builder.query({
                provideTags: ['Gds'],
                query: () => {
                    return {
                        url: `/getQuestionsGDS`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersGds : builder.query({
                provideTags: ['AnswersGds'],
                query: () => {
                    return {
                        url: `/getAnswersGDS`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchGdsQuery, useFetchAnswersGdsQuery } = gdsApi;
export { gdsApi };