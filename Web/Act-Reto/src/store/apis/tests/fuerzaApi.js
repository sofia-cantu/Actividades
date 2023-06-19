import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const fuerzaApi = createApi({
    reducerPath: 'fuerza',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchFuerza: builder.query({
                provideTags: ['Fuerza'],
                query: () => {
                    return {
                        url: `/getQuestionsFuerza`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersFuerza : builder.query({
                provideTags: ['AnswersFuerza'],
                query: () => {
                    return {
                        url: `/getAnswersFuerza`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchFuerzaQuery, useFetchAnswersFuerzaQuery } = fuerzaApi;
export { fuerzaApi };