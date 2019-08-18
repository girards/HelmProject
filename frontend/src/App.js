import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const { loading, error, data } = useQuery(BranchQuery);
  console.log(loading, error, data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Branch is {loading || error ? "loading" : data.getBranch.name}</p>
      </header>
    </div>
  );
}

const BranchQuery = gql`
  query getBranch {
    getBranch {
      name
    }
  }
`;

export default graphql(BranchQuery)(App);
