import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import Loading from './components/shared/Loading'
import Message from './components/shared/Message'
import { getAllStays } from './service/stays'

const filterDataInitail = {
  location: "Add Location",
  guests: "Add Guests"
}

function App() {
  const [filter, setFilter] = useState(filterDataInitail);
  const [stays, setStays] = useState([]);
  const [listFilterStays, setListFilterStays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleStays = async () => {
    setIsLoading(true);
    try {
      const response = await getAllStays();
      const stays = response.data;
      const location = filter.location;
      const city = !location.includes("Add") ? location.split(', ')[0] : null;

      const guests = filter.guests;
      const numberGuests = !guests.includes("Add") ? parseInt(guests.split(' ')[0]) : null;

      const stayDatafilters = stays.filter((stay) => {
        const matchCity = city ? stay.city === city : true;
        const matchGuests = numberGuests ? stay.maxGuests >= numberGuests : true;
        return matchCity && matchGuests;
      });
      
      setIsShow(true);
      if (numberGuests || city) {
        setStays(stayDatafilters);
      }else{
        const filterStays = [...new Set(stays.map((m) => `${m.city}, ${m.country}`))];
        setStays(stays);
        setListFilterStays(filterStays);
      }
    } catch (error) {
      console.error('Error filter stays:', error);
      setStays([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    handleStays();
  }, [filter]);

  return (
    <div className="pt-6  sm:pt-16 md:pt-7 lg:pt-8 xl:pt-10 px-3 lg:px-11 xl:px-25 min-h-screen flex flex-col">
      <Header filter={filter} setIsDrawerOpen={setIsDrawerOpen} />
      {isLoading && <Loading className="flex-1" text="loading statys..." />}
      {isError && <Message className="flex-1" message="The stays could not be obtained" />}
      {isShow && <Main stays={stays} filter={filter} />}
      <Footer />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} listFilterStays={listFilterStays} setFilter={setFilter} />
    </div>
  )
}

export default App
