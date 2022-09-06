const NavBar = ({ totalCounters }) => {
  console.log("NavBar - rendered");
  return (
    <nav className="navbar bg-light">
      <span className="navbar-brand" href="#">
        Navbar <span className="badge bg-secondary m-2">{totalCounters}</span>
      </span>
    </nav>
  );
};

export default NavBar;
