const LayoutPortofolio = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[calc(100vh-100px)]">
      <h1 className=" mt-[30px] text-[70px] font-bold box-border">Our Works</h1>
      {children}
    </div>
  );
};
export default LayoutPortofolio;
