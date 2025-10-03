import React, { useState, useRef, useEffect } from "react";
import Counter from "./shared/Counter";

function Drawer({ isOpen, onClose, listFilterStays, setFilter }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [location, setLocation] = useState('Add location');
    const [guests, setGuests] = useState('Add guests');
    const containerRef = useRef(null);
    const [highlightStyle, setHighlightStyle] = useState({});

    const handleFilter = () =>{
        setFilter({
           location,
           guests
        })
        onClose();
    }

    useEffect(() => {
        if (containerRef.current) {
            const items = containerRef.current.querySelectorAll(".selectable");
            if (items[activeIndex]) {
                const el = items[activeIndex];
                const rect = el.getBoundingClientRect();
                const parentRect = containerRef.current.getBoundingClientRect();

                setHighlightStyle({
                    left: rect.left - parentRect.left,
                    top: rect.top - parentRect.top,
                    width: rect.width,
                    height: rect.height,
                });
            }
        }
    }, [activeIndex]);

    useEffect(() => {
        const total = adults + children
        let totalLabel = 'Add guests';
        if (total > 1) {
            totalLabel = `${total} guests`;
        }
        if (total === 1) {
            totalLabel = `${total} guest`;
        }
        setGuests(totalLabel)
    }, [adults, children])

    return (
        <>
            <div
                className={`fixed pt-4 pb-4 px-6 flex flex-col gap-4 top-0 left-0 h-130 md:h-160 lg:h-100 lg:px-24 lg:pt-24 w-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="w-full text-[#333] flex justify-between lg:hidden">
                    <p className="text-[12px] font-semibold">Edit your search</p>
                    <button
                        onClick={onClose}
                        className="top-4 right-4 font-bold text-gray-800 lg:text-gray-500 hover:lg:text-gray-800 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4.5 w-4.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    ref={containerRef}
                    className="relative  shadow-[0_1px_6px_#0000001a] rounded-2xl items-center lg:flex lg:justify-between"
                >
                    <div
                        style={highlightStyle}
                        className="absolute hidden lg:block border-1 rounded-2xl transition-all duration-600 ease-in-out pointer-events-none"
                    ></div>
                    <div
                        onClick={() => setActiveIndex(0)}
                        className=" selectable cursor-pointer w-full border-b border-gray-200 pl-6 py-3 flex flex-col gap-1  lg:border-b-0"
                    >
                        <div className="lg:border-r border-gray-200" >
                            <p className="text-[10px] font-bold uppercase text-[#575757]">Location</p>
                            <div id="city-location" className={`${(activeIndex && location.includes('Add')) && 'text-[#BDBDBD]'} text-sm `}>{location}</div>
                        </div>

                    </div>
                    <div
                        onClick={() => setActiveIndex(1)}
                        className="selectable  cursor-pointer w-full pl-6 py-3 flex flex-col gap-1"
                    >
                        <div className=" lg:border-r border-gray-200" >
                            <p className="text-[10px] font-bold uppercase text-[#575757]">Guests</p>
                            <div className={`${(!activeIndex && guests.includes('Add')) && 'text-[#BDBDBD]'} text-sm `}>{guests}</div>
                        </div>
                    </div>
                    <div className="hidden w-full lg:block">
                        <button
                            onClick={handleFilter}
                            className="text-white font-bold bg-red-500/70 hover:bg-[#EB5757] w-30 py-4 rounded-2xl flex justify-center gap-1 cursor-pointer  mx-auto"
                        >
                            <img
                                src="images/icons/search_white_55b1c1d.svg"
                                alt="search_white"
                                className="w-5"
                            />
                            Search
                        </button>
                    </div>
                </div>
                <div className="w-full h-50 lg:h-full flex flex-col lg:flex-row lg:justify-between px-4 relative mb-20 lg:mb-0">
                    <div
                        className={`
                        absolute lg:static top-0 left-0 w-full lg:w-[35%] transition-all duration-500 ease-in-out
                        ${activeIndex ? "opacity-0 translate-y-7 pointer-events-none" : "opacity-100 translate-y-0"}
                        flex flex-col
                        `}
                    >
                        <ul className="flex flex-col gap-4">
                            {listFilterStays &&
                                listFilterStays.map((filterStay) => (
                                    <li
                                        key={filterStay}
                                        className="flex gap-2 cursor-pointer"
                                        onClick={() => setLocation(filterStay)}
                                    >
                                        <img
                                            src="images/icons/location_5df7949e.svg"
                                            className="w-3.5 h-3.5"
                                            alt={filterStay}
                                        />
                                        {filterStay}
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div
                        className={`
                        absolute lg:static top-0 left-0 w-full lg:w-[32%] transition-all duration-500 ease-in-out
                        ${!activeIndex ? "opacity-0 translate-y-7 pointer-events-none" : "opacity-100 translate-y-0"}
                        flex flex-col gap-8
                        `}
                    >
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="font-bold text-xs">Adults</h1>
                                <h2 className="text-[#BDBDBD] text-xs">Ages 13 or above</h2>
                            </div>
                            <Counter value={adults} onChange={setAdults} />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="font-bold text-xs">Children</h1>
                                <h2 className="text-[#BDBDBD] text-xs">Ages 2-12</h2>
                            </div>
                            <Counter value={children} onChange={setChildren} />
                        </div>
                    </div>

                    <div className="hidden lg:block lg:w-[33%]"></div>
                </div>

                <div className="min-h-30 flex items-end lg:hidden">
                    <button
                        onClick={handleFilter}
                        className="text-white font-bold bg-[#EB5757] py-3 w-full md:w-35 md:mx-auto md:py-4 rounded-2xl flex justify-center gap-1 cursor-pointer"
                    >
                        <img
                            src="images/icons/search_white_55b1c1d.svg"
                            alt="search_white"
                            className="w-5"
                        />
                        Search
                    </button>
                </div>
            </div>
            <div
                onClick={onClose}
                className={`${isOpen ? "block" : "hidden"} overlay fixed inset-0 bg-black/40 bg-opacity-50 z-40`}
            ></div>
        </>
    );
}

export default Drawer;