import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p> ٩(╬ʘ益ʘ╬)۶ Sorry, an unexpected error has occurred. 	୧((#Φ益Φ#))୨ </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
