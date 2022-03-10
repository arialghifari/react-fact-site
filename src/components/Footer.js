const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={isDarkMode ? "dark" : ""}>
      <a
        href="https://github.com/arialghifari"
        target="_blank"
        rel="noreferrer"
      >
        © {year} Al development. All rights reserved.
      </a>
    </footer>
  );
};

export default Footer;
