import { Link } from "react-router-dom";
import { getCount, increaseCount } from "../features/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCount)

  return (
    <header className="Header">
      <h1>Redux Blog</h1>

      <button
        onClick={() => {
          dispatch(increaseCount());
        }}
      >
        {count}
      </button>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"post"}>POSTS</Link>
          </li>
          <li>
            <Link to={"user"}>USERS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
