const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-center  h-[60px] items-center border-2 mt-10 bg-slate-300">
      <div className="flex justify-center items-center">
        <h4 className="bg-customBlue p-2">
          © {year} Landmark Inc. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
