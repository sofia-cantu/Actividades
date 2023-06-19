import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const sspbApi = createApi({
    reducerPath: 'sspb',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchSspb: builder.query({
                provideTags: ['Sspb'],
                query: () => {
                    return {
                        url: `/getQuestionsSSPB`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            fetchAnswersSspb : builder.query({
                provideTags: ['AnswersSspb'],
                query: () => {
                    return {
                        url: `/getAnswersSSPB`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchSspbQuery, useFetchAnswersSspbQuery } = sspbApi;
export { sspbApi };