import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gijonApi = createApi({
    reducerPath: 'gijon',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchGijon: builder.query({
                provideTags: ['Gijon'],
                query: () => {
                    return {
                        url: `/getQuestionsGijon`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersGijon : builder.query({
                provideTags: ['AnswersGijon'],
                query: () => {
                    return {
                        url: `/getAnswersGijon`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchGijonQuery, useFetchAnswersGijonQuery } = gijonApi;
export { gijonApi };