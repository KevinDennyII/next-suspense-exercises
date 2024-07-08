import React from 'react';

import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import { range } from '@/utils';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  // const games = await getGamesInLibrary();

  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        {/*<p>*/}
        {/*  <span className="num-of-games">*/}
        {/*    {games.length}*/}
        {/*  </span>{' '}*/}
        {/*  games in library*/}
        {/*</p>*/}
      </header>
      <div className="game-grid">
        {range(12).map((num) => (
          <LibraryGameCardSkeleton
            key={num}
          />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
