const FooterHeading = ({ name }: { name: string }) => {
  return (
    <h5 className="font-clash text-lg tracking-wide text-white font leading-[19.68px] pb-1 md:text-xl">
      {name}
    </h5>
  );
};

export default FooterHeading;
