import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IMovie {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface IReview {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ICinema {
  id: string;
  name: string;
  movieIds: string[];
}

export const movieApi = createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], string | undefined>({
      query: (cinemaId) => {
        //cinemaId ? `movies?cinemaId=${cinemaId}` : 'movies',
        return {
          url: 'movies',
          params: { cinemaId },
        };
      },
    }),
    getMovie: builder.query<IMovie, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
    getReviews: builder.query<IReview[], string>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
    getCinemas: builder.query<ICinema[], void>({
      query: () => 'cinemas',
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetReviewsQuery,
  useGetCinemasQuery,
} = movieApi;
