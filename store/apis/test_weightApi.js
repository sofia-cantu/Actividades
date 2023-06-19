import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const test_weightApi = createApi({
    reducerPath: 'test_weight',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchTest_weight: builder.query({
                provideTags: ['Test_weight'],
                query: (id) => {
                    return {
                        url: `/getTest_weight/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editTest_weight : builder.mutation({
                invalidatesTags: ['Test_weight'],
                query: (test_weight) => {
                    return {
                        method : 'PUT',
                        url : `/updateTest_weight/${test_weight.test_weight_id}`,
                        body: {
                            test_id : test_weight.test_id,
                            min_weight : test_weight.min_weight,
                            max_weight : test_weight.max_weight,
                            description : test_weight.description,
                            color : test_weight.color,
                            gender_id : test_weight.gender_id,
                        },
                    };
                },
            }),
            deleteTest_weight : builder.mutation({
                invalidatesTags: ['Test_weight'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteTest_weight/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchTest_weightQuery, useEditTest_weightMutation, useDeleteTest_weightMutation } = test_weightApi;
export default test_weightApi;
