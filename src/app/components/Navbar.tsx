const Navbar = () => {
  return (
    <div className="my-6">
      <ul className="flex px-14 gap-6 items-center text-sm">
        <li>
          <a href="#" className="text-[30px] font-bold text-black">
            SHOP.CO
          </a>
        </li>
        <li>Shop ^</li>
        <li><a href="#">On Sale</a></li>
        <li><a href="#">New Arrivals</a></li>
        <li><a href="#">Brands</a></li>
        <li className="">
          <input type="text" placeholder="Search for porducts..." />
        </li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </div>
  );
};

export default Navbar;
