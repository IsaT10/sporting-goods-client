import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query.searchTerm) {
          params.append('searchTerm', query.searchTerm);
        }
        if (query.category && query.category !== 'all') {
          params.append('category', query.category);
        }
        if (query.page) {
          params.append('page', query.page);
        }
        if (query.sort) {
          params.append('sort', query.sort);
        }

        return { url: '/products', method: 'GET', params };
      },
      providesTags: ['product'],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/add-product',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['product'],
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/products/${options.id}`,
        method: 'PATCH',
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
