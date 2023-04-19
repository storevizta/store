import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useGetUserIdQuery } from '../features/query/UserQuery.jsx';
import { GeneralConfiguration } from '../components/GeneralConfiguration.jsx'
import { Advertisements } from '../components/Advertisements.jsx'
import { Favorites } from '../components/Favorites.jsx'
import { Subscription } from '../components/Subscription.jsx'
import { Reputation } from '../components/Reputation.jsx'

export const Profile = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log('SOY EL USER', user);
  const { data, error, isLoading: is } = useGetUserIdQuery(user.sub);

  if (is) {
    return <div>Loading...</div>;
  }
  console.log('SOY DATA', data);

  return (
    <div className="flex">
      <h1>Profile</h1>

      <aside className="w-64 max-w-64 mx-5 p-5 rounded-xl bg-zinc-700 flex flex-col gap-5">
        <div>
        <Link to="/generalconfig">
        <div>General Configuration</div>
        </Link>
        </div>
        <div>
        <Link to="/advertisements">
          <div>Advertisements</div>
        </Link>
        </div>
        <div>
        <Link to="/favorites">
          <div>Favorites</div>
        </Link>
        </div>
        <div>
        <Link to="/subscription">
          <p>Subscription</p>
        </Link>
          <div>
        <Link to="/reputation">
          <p>Reputation</p>
        </Link>
          </div>
        </div>
        <h4 className="">Vizta Copyrigth ©</h4>
      </aside>

      <div className="p-2 flex flex-col gap-2 hover:bg-zinc-700">
        <img className="w-5" src={data.picture} alt={data.name} />
        <p className="text-slate-50">Name:{data.name}</p>
        <p>Nickname:{data.nickname}</p>
        <p>Email:{data.email}</p>
        <p>Address:{data.address}</p>
        <p>Phone:{data.phone}</p>
        <p>Joined Vizta:{data.createdAt}</p>
      </div>
    </div>
  );
};