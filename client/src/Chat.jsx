import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import { Container } from 'shards-react';
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });


const GET_MESSAGES = gql`
query {
  messages {
    id
    content
    user 
  }
}`;

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES);
    if (!data){
        return null
    }
    return (
        <>
        #começo da adição do estilo
            {data.messages.map(({id, user , content})=>
                <div></div>
            )}
        </>
    )

}

  const Chat = () =>{
    return <Container> <Messages user="Jao" /></Container>
  };

  export default () =>(
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
  );