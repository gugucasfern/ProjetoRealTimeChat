import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });


  const Chat = () =>{
    return (
        <div> Salve sou o chat</div>
    );
  };

  export default () =>(
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
  );