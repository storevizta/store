import { useGetMessageQuery } from '../features/query/MessagesQuery';

import { CreateMessage } from './CreateMessage';

import { Response } from './Response';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import question from '../assets/question.svg';

export const Messages = ({ adId, userId }) => {
  const { data, error, isLoading } = useGetMessageQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Error />
      </div>
    );
  }

  const messages = data.filter((message) => message.AdId === adId);

  return (
    <div className="w-2/3 m-auto">
      <div className="bg-slate-400 pt-3 pb-3 text-lg">
        <h2 className="font-bold text-center">Messages to the seller</h2>
      </div>
      {messages?.map((message) => (
        <div className="border-b-4 border-slate-400 pt-3 pb-3 pr-4 pl-4">
          <div className="flex justify-between" key={message.id}>
            <p className="inline">
              {message.createdAt
                .slice(0, 10)
                .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
            </p>

            <div>
              <img className="w-5 inline" src={question} alt="icon question" />
              <p className="inline pl-3">{message.message}</p>
            </div>

            <p className="inline">Denunciar</p>
          </div>
          <Response
            id={message.id}
            response={message.response}
            updatedAt={message.updatedAt}
          />
        </div>
      ))}
      <CreateMessage userId={userId} adId={adId} />
    </div>
  );
};