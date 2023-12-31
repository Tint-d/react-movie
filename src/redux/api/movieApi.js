import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: ({ pages, token }) => ({
        url: `/movie/popular?language=en-US&page=${pages}`,
        headers: { authorization: `Bearer ${token}` },
      }),
    }),
    getVideo: builder.query({
      query: ( token ) => ({
        url: `/movie/502356/videos?language=en-US`,
        headers: { authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const { useGetPopularQuery,useGetVideoQuery  } = movieApi;
