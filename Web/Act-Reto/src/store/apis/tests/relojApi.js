import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const relojApi = createApi({
    reducerPath: 'reloj',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchReloj: builder.query({
                provideTags: ['Reloj'],
                query: () => {
                    return {
                        url: `/getQuestionsReloj`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersReloj : builder.query({
                provideTags: ['AnswersReloj'],
                query: () => {
                    return {
                        url: `/getAnswersReloj`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchRelojQuery, useFetchAnswersRelojQuery } = relojApi;
export { relojApi };