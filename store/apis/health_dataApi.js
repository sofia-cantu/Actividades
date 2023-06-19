import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const health_dataApi = createApi({
    reducerPath: 'health_data',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchHealth_data: builder.query({
                provideTags: ['Health_data'],
                query: (id) => {
                    return {
                        url: `/getHealth_data/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editHealth_data : builder.mutation({
                invalidatesTags: ['Health_data'],
                query: (health_data) => {
                    return {
                        method : 'PUT',
                        url : `/updateHealth_data/${health_data.health_data_id}`,
                        body: {
                            pam_id : health_data.pam_id,
                            weight : health_data.weight,
                            height : health_data.height,
                            blood_type : health_data.blood_type,
                        },
                    };
                },
            }),
            deleteHealth_data : builder.mutation({
                invalidatesTags: ['Health_data'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deleteHealth_data/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchHealth_dataQuery, useEditHealth_dataMutation, useDeleteHealth_dataMutation } = health_dataApi;
export default health_dataApi;