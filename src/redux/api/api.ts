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

        if (query.brand && query.brand !== 'all') {
          params.append('brand', query.brand);
        }
        if (query.page) {
          params.append('page', query.page);
        }
        if (query.limit) {
          params.append('limit', query.limit);
        }
        if (query.rating && query.rating !== 'all') {
          params.append('rating', query.rating);
        }

        if (query.sort) {
          params.append('sort', query.sort);
        }

        const url = query.id ? `/products/${query.id}` : '/products';
        // Poll every 30 seconds

        return { url, method: 'GET', params };
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
    placeOrder: builder.mutation({
      query: (data) => ({
        url: `/carts/place-order`,
        method: 'POST',
        body: data,
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
  usePlaceOrderMutation,
} = baseApi;
