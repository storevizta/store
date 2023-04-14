import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useGetAdsQuery } from '../features/slices/adsSlice';

import { setTitle } from '../features/slices/filterSlice';

import { Navbar } from '../components/Navbar';

import { Sidebar } from '../components/Sidebar';

import { Cards } from '../components/Cards';

export const Home = () => {
  const title = useSelector((state) => state.filter.title);

  console.log(title);

  const queryParams = new URLSearchParams(window.location.search);

  // const title = queryParams.get('title');

  const category = queryParams.get('category');

  const { data, error, isLoading } = useGetAdsQuery({ title, category });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>
          {data &&
            data?.map((el) => (
              <Link to={`/detail/${el.id}`} key={el.id}>
                <Cards info={el} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
