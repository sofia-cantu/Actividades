import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const circupantApi = createApi({
    reducerPath: 'circupant',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchCircupant: builder.query({
                provideTags: ['Circupant'],
                query: () => {
                    return {
                        url: `/getQuestionsCircupant`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersCircupant : builder.query({
                provideTags: ['AnswersCircupant'],
                query: () => {
                    return {
                        url: `/getAnswersCircupant`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchCircupantQuery, useFetchAnswersCircupantQuery } = circupantApi;
export { circupantApi };