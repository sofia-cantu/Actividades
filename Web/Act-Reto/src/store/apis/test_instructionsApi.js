import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const test_instructionsApi = createApi({
    reducerPath: 'test_instructions',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchTest_instructions: builder.query({
                provideTags: ['Test_instructions'],
                query: (id) => {
                    return {
                        url: `/getTest_instructions/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editTest_instructions : builder.mutation({
                invalidatesTags: ['Test_instructions'],
                query: (test_instructions) => {
                    return {
                        method : 'PUT',
                        url : `/updateTest_instructions/${test_instructions.test_instructions_id}`,
                        body: {
                            test_id : test_instructions.test_id,
                            test_instructions_order : test_instructions.test_instructions_order,
                            instructions : test_instructions.instructions,
                        },
                    };
                },
            }),
            deleteTest_instructions : builder.mutation({
                invalidatesTags: ['Test_instructions'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteTest_instructions/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchTest_instructionsQuery, useEditTest_instructionsMutation, useDeleteTest_instructionsMutation } = test_instructionsApi;
export { test_instructionsApi };