import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRouteAdmin = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {

        const logindata = localStorage.getItem('adminlogin') === 'true'

        if (logindata) {
          return <Component {...props} />;


        } else {

          return (
            <Redirect
              to={{
                pathname: "/adminlogin",
                state: {
                  from: props.location
                }
              }}
            />
          );

        }
      }}
    />
  );
};

