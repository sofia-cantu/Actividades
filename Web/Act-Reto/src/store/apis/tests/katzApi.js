import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const katzApi = createApi({
    reducerPath: 'katz',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchKatz: builder.query({
                provideTags: ['Katz'],
                query: () => {
                    return {
                        url: `/getQuestionsKatz`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersKatz : builder.query({
                provideTags: ['AnswersKatz'],
                query: () => {
                    return {
                        url: `/getAnswersKatz`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchKatzQuery, useFetchAnswersKatzQuery } = katzApi;
export { katzApi };