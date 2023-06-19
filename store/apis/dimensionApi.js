import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dimensionApi = createApi({
    reducerPath: 'dimension',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchDimension: builder.query({
                provideTags: ['Dimension'],
                query: (id) => {
                    return {
                        url: `/getDimension/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editDimension : builder.mutation({
                invalidatesTags: ['Dimension'],
                query: (dimension) => {
                    return {
                        method : 'PUT',
                        url : `/updateDimension/${dimension.dimension_id}`,
                        body: {
                            dimension : dimension.dimension,
                        },
                    };
                },
            }),
            deleteDimension : builder.mutation({
                invalidatesTags: ['Dimension'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteDimension/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchDimensionQuery, useEditDimensionMutation, useDeleteDimensionMutation } = dimensionApi;
export default dimensionApi;