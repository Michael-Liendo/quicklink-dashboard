import { Dispatch, SetStateAction } from "react";

type ErrorCard = {
  error: Error | null;
  setError: (arg0:String | Error | void | null | SetStateAction<Error | String | void | null>) => void;
}

export default function ErrorCard({ error, setError }:ErrorCard) {
  if (error) {
    setTimeout(() => {
      setError(null);
    }, 4000);
  }

  return (
    <>
      {error ? (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          {error.toString()}
        </div>
      ) : null}
    </>
  );
}