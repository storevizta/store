import { Link } from 'react-router-dom';

import { Card } from './Card';

export const Cards = ({ ads }) => (
  <>
    <div>
      <div className="grid grid-cols-6 gap-2">
        {ads.map((el) => (
          <Link className="w-48" to={`/detail/${el.id}`} key={el.id}>
            <Card info={el} />
          </Link>
        ))}
      </div>
    </div>
  </>
);
