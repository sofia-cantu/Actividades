import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const testApi = createApi({
    reducerPath: 'test',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchTest: builder.query({
                provideTags: ['Test'],
                query: (id) => {
                    return {
                        url: `/getTest/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            addTest : builder.mutation({
                invalidatesTags: ['Test'],
                query: (test) => {
                    return {
                        method : 'POST',
                        url : '/addTest',
                        body: {
                            dimension_id : test.dimension_id,
                            test_name : test.test_name,
                            self_test : test.self_test,
                        },
                    };
                },
            }),
            editTest : builder.mutation({
                invalidatesTags: ['Test'],
                query: (test) => {
                    return {
                        method : 'PUT',
                        url : `/updateTest/${test.test_id}`,
                        body: {
                            dimension_id : test.dimension_id,
                            test_name : test.test_name,
                            self_test : test.self_test,
                        },
                    };
                },
            }),
            deleteTest : builder.mutation({
                invalidatesTags: ['Test'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteTest/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchTestQuery, useAddTestMutation, useEditTestMutation, useDeleteTestMutation } = testApi;
export default testApi;