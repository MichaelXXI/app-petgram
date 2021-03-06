import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://petgram-server-mykhaylo.mykhaylogusak.now.sh/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
