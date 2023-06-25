import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '@/types/movie';

export const movieApi = createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], void>({ query: () => 'movies' }),
    getMovie: builder.query<IMovie, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
