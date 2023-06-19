import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const pamsApi = createApi({
    reducerPath: 'pams',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchPams: builder.query({
                provideTags: ['Pams'],
                query: (id) => {
                    return {
                        url: `/getPam/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            addPam : builder.mutation({
                invalidatesTags: ['Pams'],
                query: (pam) => {
                    return {
                        method : 'POST',
                        url : '/addPam',
                        body: {
                            person_id : pam.person_id,
                            birth_date : pam.birth_date,
                            deceased_date : pam.deceased_date,
                            guardian_id : pam.guardian_id,
                            doctor_id : pam.doctor_id,
                            belongs_to_archdiocese : pam.belongs_to_archdiocese,
                            pam_group_id : pam.pam_group_id,
                        },
                    };
                },
            }),
            fetchPamTests : builder.query({
                providesTags: ['PamTests'],
                query: (id) => {
                    return {
                        url: `/getPamTests/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            editPam : builder.mutation({
                invalidatesTags: ['Pams'],
                query: (pam) => {
                    return {
                        method : 'PUT',
                        url : `/updatePam/${pam.pam_id}`,
                        body: {
                            person_id : pam.person_id,
                            birth_date : pam.birth_date,
                            deceased_date : pam.deceased_date,
                            guardian_id : pam.guardian_id,
                            doctor_id : pam.doctor_id,
                            belongs_to_archdiocese : pam.belongs_to_archdiocese,
                            pam_group_id : pam.pam_group_id,
                        },
                    };
                },
            }),
            deletePam : builder.mutation({
                invalidatesTags: ['Pams'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deletePam/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPamsQuery, useAddPamMutation, useFetchPamTestsQuery, useEditPamMutation, useDeletePamMutation } = pamsApi;
export { pamsApi };