import "./NavBar.css";

export function NavBar() {
  return (
    <nav>
      <img style={{ color: "red" }} src="/logo.svg" alt="logo" />
      <ul>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
