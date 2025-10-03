function Card({ stay, animate, delay }) {
    const beds = stay.beds ? `· ${stay.beds} beds` : "";

    return (
        <div 
        style={{ transitionDelay: delay }}
        className={`flex flex-col gap-2 transition-all duration-2000 ease-in-out
         ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} `}>
            <div className="flex flex-col gap-1 mb-4">
                <img
                    src={stay.photo}
                    alt={`${stay.type} ${beds}`}
                    className="rounded-3xl xs:h-60 ss:h-68 ms:h-74 md:h-68 lg:h-67 xl:h-75 2xl:h-140 object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="flex w-full">
                        {
                            stay.superHost && (
                                <span className="border border-gray-500 rounded-full px-2 py-1 text-xs font-bold uppercase mr-2">
                                    SUPER HOST
                                </span>
                            )
                        }
                        <span className="text-gray-600">
                            {stay.type} {beds}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="images/icons/star_55f860b4.svg" alt="star" className="w-4 h-4" />
                        <span className="text-sm font-light">
                            {stay.rating}
                        </span>
                    </div>
                </div>
                <div className="text-base font-bold w-[70%] lg:w-full">
                    {stay.title}
                </div>
            </div>

        </div>
    );
}
export default Card;