import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append('priority', priority);
        }

        return { url: '/products', method: 'GET', params };
      },
      providesTags: ['product'],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/task',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['product'],
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/task/${options.id}`,
        method: 'PUT',
        body: options.data,
      }),
      invalidatesTags: ['product'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
