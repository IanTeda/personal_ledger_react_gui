import { NavLink } from "react-router";

function HomePage() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>

      <h1 className="text-3xl font-bold underline">Home Page</h1>
    </>
  );
}

export default HomePage;