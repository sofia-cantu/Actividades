import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const lbApi = createApi({
    reducerPath: 'lb',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchLb: builder.query({
                provideTags: ['Lb'],
                query: () => {
                    return {
                        url: `/getQuestionsLB`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersLb : builder.query({
                provideTags: ['AnswersLb'],
                query: () => {
                    return {
                        url: `/getAnswersLB`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchLbQuery, useFetchAnswersLbQuery } = lbApi;
export { lbApi };