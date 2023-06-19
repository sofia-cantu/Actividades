import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const sarcfApi = createApi({
    reducerPath: 'sarcf',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchSarcf: builder.query({
                provideTags: ['Sarcf'],
                query: () => {
                    return {
                        url: `/getQuestionsSARCF`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersSarcf : builder.query({
                providesTags: ['AnswersSarcf'],
                query: () => {
                    return {
                        url: `/getAnswersSARCF`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchSarcfQuery, useFetchAnswersSarcfQuery } = sarcfApi;
export { sarcfApi };