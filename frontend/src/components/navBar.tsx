import ThemeSwitcher from "./themeSwitcher";

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">vedPatel</a>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default NavBar;
