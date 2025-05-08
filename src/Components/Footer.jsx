import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex justify-center py-4 text-black">
        &copy; CopyRight {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Footer;