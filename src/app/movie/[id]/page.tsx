'use client';
import Detail from '@/components/movies/detail/detail';

interface IProps {
  params: { id: string };
}

export default function Film({ params }: IProps) {
  return (
    <main>
      <Detail id={params.id} />
    </main>
  );
}
