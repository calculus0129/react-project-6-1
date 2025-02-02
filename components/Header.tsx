import classes from "./Header.module.css";
import { actions } from "@/store";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth ? (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => {
                  dispatch(actions.authActions.logout());
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
