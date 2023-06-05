import React from "react";

const Footer = () => {
  const addFooterStyles = () => {
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const windowHeight = window.innerHeight;

    const headerHeight = header.offsetHeight;

    footer.style.marginTop = `${
      windowHeight - footer.offsetHeight - headerHeight
    }px`;
  };

  React.useEffect(() => {
    addFooterStyles();
    window.addEventListener("resize", addFooterStyles);
    return () => {
      window.removeEventListener("resize", addFooterStyles);
    };
  }, []);

  return (
    <footer className=" bg-[#34495E]">
      <div className="footer-wrapper container mx-auto py-4">
        <p className="text-center font-semibold text-cyan-100">
          Copyright &copy; ameeriit
        </p>
      </div>
    </footer>
  );
};

export default Footer;
