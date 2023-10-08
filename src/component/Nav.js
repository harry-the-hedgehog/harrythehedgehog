function Nav({ theme }) {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo" id="navLogo">Your Logo</div>
      <ul className="navItems" id="navItems">
        <li className={`navItem ${theme}`}>Products</li>
        <li className={`navItem ${theme}`}>News</li>
        <li className={`navItem ${theme}`}>Support</li>
        <li className={`navItem ${theme}`}>Contact</li>
      </ul>
      <ul className="navItems" id="accountNav">
        <li className={`accountItem ${theme} button`}>Log In</li>
        <li className={`accountItem ${theme} button`}>Sign Up</li>
        <li className={`accountItem ${theme} account`}>account</li>
        <li className={`accountItem ${theme} account`}><svg></svg></li>
      </ul>
    </nav>
  );
}

export default Nav;