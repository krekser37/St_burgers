import { FC, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
/* import { useSelector } from "react-redux"; */
import { useAppSelector } from "../../services/hooks";

type TProtectedRoute = {
  children: ReactNode;
  path: string;
  exact?: boolean;
};

const ProtectedRoute: FC<TProtectedRoute> = ({ children, ...rest }) => {
  const user = useAppSelector((store) => store.auth.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
