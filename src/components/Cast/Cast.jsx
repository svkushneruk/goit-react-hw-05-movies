import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/MovieAPI';
import { Credit } from 'components/Credit/Credit';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    API.getCredits(movieId).then(setCredits);
  }, [movieId]);
  return (
    <>
      {credits && (
        <ul>
          {credits.map(credit => {
            return (
              <li key={credit.id}>
                <Credit info={credit} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
