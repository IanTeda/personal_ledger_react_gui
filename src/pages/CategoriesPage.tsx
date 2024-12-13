import { NavLink } from "react-router";

export default function CategoriesPage() {
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

      <h1 className="text-3xl font-bold underline">Categories Page</h1>
    </>
  );
}
