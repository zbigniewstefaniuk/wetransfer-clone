function Footer() {
  return (
    <footer className="absolute bottom-0 inset-x-0 p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/zbigniewstefaniuk"
          className="hover:underline"
        >
          Mammoth™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
