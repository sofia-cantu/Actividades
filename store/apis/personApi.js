import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const personApi = createApi({
    reducerpath: 'person',
    base: fetchBaseQuery({
        baseUrl : 'http://localhost:3100/api',
    }),
    endpoints(builder) {
        return {
            fetchPerson: builder.query({
                provideTags: ['Person'],
                query: (id) => {
                    return {
                        url: `/getPerson/${id}`,
                        params: {},
                        method: 'GET',
                    };
                },
            }),
            addPerson : builder.mutation({
                invalidatesTags: ['Person'],
                query: (person) => {
                    return {
                        method : 'POST',
                        url : '/addPerson',
                        body: {
                            first_name : person.first_name,
                            last_name : person.last_name,
                            gender_id : person.gender_id,
                            role_id : person.role_id,
                            phone : person.phone,
                            email : person.email,
                            country : person.country,
                            state : person.state,
                            city : person.city,
                            address_1 : person.address_1,
                            address_2 : person.address_2,
                            zip_code : person.zip_code,
                        },
                    };
                },
            }),
            editPerson : builder.mutation({
                invalidatesTags: ['Person'],
                query: (person) => {
                    return {
                        method : 'PUT',
                        url : `/updatePerson/${person.person_id}`,
                        body: {
                            first_name : person.first_name,
                            last_name : person.last_name,
                            gender_id : person.gender_id,
                            role_id : person.role_id,
                            phone : person.phone,
                            email : person.email,
                            country : person.country,
                            state : person.state,
                            city : person.city,
                            address_1 : person.address_1,
                            address_2 : person.address_2,
                            zip_code : person.zip_code,
                        },
                    };
                },
            }),
            deletePerson : builder.mutation({
                invalidatesTags: ['Person'],
                query: (id) => {
                    return {
                        method : 'DELETE',
                        url : `/deletePerson/${id}`,
                    };
                },
            }),
        };
    },
});

export const { useFetchPersonQuery, useAddPersonMutation, useEditPersonMutation, useDeletePersonMutation } = personApi;
export default personApi;