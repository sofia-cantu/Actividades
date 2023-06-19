import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const upandgoApi = createApi({
    reducerPath: 'upandgo',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchUpandgo: builder.query({
                provideTags: ['Upandgo'],
                query: () => {
                    return {
                        url: `/getQuestionsUpandgo`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersUpandgo : builder.query({
                provideTags: ['Upandgo'],
                query: () => {
                    return {
                        url: `/getAnswersUpandgo`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchUpandgoQuery, useFetchAnswersUpandgoQuery } = upandgoApi;
export { upandgoApi };