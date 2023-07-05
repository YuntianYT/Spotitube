import React from 'react';
import { useParams } from 'react-router-dom';

function ErrorPage() {
  const { message } = useParams();
  const decodedMessage = decodeURIComponent(message);
  return (
    <div>
      <h1>Error</h1>
      <p>{decodedMessage}</p>
    </div>
  );
}

export default ErrorPage;
