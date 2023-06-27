'use client';
import FilmDetail from '@/components/movies/detail/detail';

interface IProps {
  params: { id: string };
}

export default function Film({ params }: IProps) {
  return (
    <main>
      <FilmDetail id={params.id} />
    </main>
  );
}
