import { useEffect, useState } from "react";
import ListCards from "./Card/ListCards";

function Main({filter, stays}) {
  const limit = 12;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);
    return (
      <main className="flex-1">
      <div className={`flex justify-between items-start mt-10 md:mt-4 lg:mt-10 mb-8
        transition-all duration-2000 ease-in-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        <h2 className ={`text-2xl font-semibold`} >
          {filter.location.includes("Add") ? 'All stays': `Stays in ${filter.location}`}
        </h2>
        <h3 className = "text-[#575757]">
          {stays.length > limit ? '12+': stays.length} {stays.length === 1 ? 'stay' : 'stays'}
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <ListCards data={stays} animate={animate}/>
      </div>
      
    </main>
    );
}

export default Main;