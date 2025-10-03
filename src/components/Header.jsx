function Header({ filter, setIsDrawerOpen }) {
    return (
        <header
            className="relative flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 w-full md:pb-8"
        >
            <div className="w-full md:w-80">
                <img
                    src="images/icons/logo-f7862584.svg"
                    alt="logo"
                    className="w-24"
                />
            </div>

            <div
                onClick={() => setIsDrawerOpen(true)}
                className="cursor-pointer shadow-[0_1px_6px_#0000001a] flex rounded-2xl min-w-70 max-w-80 mt-6 lg:mt-0"
            >
                <div
                    className={`${filter.location.includes('Add') && 'text-[#BDBDBD]'} p-4 border-e-1 border-e-gray-100 min-w-33`}
                >
                    {filter.location}
                </div>
                <div
                    className={`${filter.guests.includes('Add') && 'text-[#BDBDBD]'} p-4 border-e-1 border-e-gray-100 `}
                >
                    {filter.guests}
                </div>
                <div className="p-4 flex justify-center items-center">
                    <img
                        src="images/icons/search_326a574d.svg"
                        alt="search"
                        className="w-4.5"
                    />
                </div>
            </div>


        </header>
    );
}

export default Header;