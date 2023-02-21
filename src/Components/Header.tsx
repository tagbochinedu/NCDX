import { useState, useEffect } from "react";
interface Window {
  window: any;
}

const Header = () => {
  const [scrolled, setScrolled] = useState(0);
  const [transition, setTransition] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrolled >= 10) {
      setTransition(true);
    } else {
      setTransition(false);
    }
    console.log(scrolled);
  }, [scrolled]);

  return (
    <header
      className={`mx-5 py-5 transition-all ease-in-out duration-300 sticky flex justify-between items-center top-0 z-10 ${
        transition ? "bg-white shadow-md shadow-lgr rounded-b-lg px-4" : ""
      }`}
    >
      <div className="flex">
        <svg
          className="w-6 h-6 fill-logo"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MagnifyIcon"
        >
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
        </svg>
        <p className="text-lgr ml-3">Search (Ctrl+/)</p>
      </div>
      <div className="bg-lgr2 w-9 h-9 flex justify-center items-center rounded-full relative">
        {" "}
        <p className="text-logo text-lg">U</p>
        <div className='w-3 h-3 border-[2px] border-white bg-green absolute rounded-full bottom-0 right-0'/>
      </div>
    </header>
  );
};

export default Header;
