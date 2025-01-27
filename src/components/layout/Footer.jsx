function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="text-md">
          &copy; {currentYear} GitHub Finder. Built with ❤️ by{" "}
          <a
            href="https://www.tirthorajportfolio.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            CodeTirtho97
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
