import { useState } from "react";
import SpotCard from "../Cards/SpotCard";
import useRefetch from "../Hooks/UseRefetch";

const AllSpots = () => {
  const { data } = useRefetch(`http://localhost:5426/spots`);
  const [sort, setSort] = useState(null); // Initialize sort state with null

  const handleSortChange = (event) => {
    const selectedSort = event.target.value; // Get the selected value from the event
    setSort(selectedSort); // Update sort state with the selected value
  };

  return (
    <section className="py-5">
      <div className="flex items-center py-7 justify-center">
        <select onChange={handleSortChange} className="px-5 py-3 bg-btn_bg" name="order">
          <option className="text-nav_bg" value="0">
            Sort by Price (Low to High)
          </option>
          <option className="text-nav_bg" value="1">
            Sort by Price (High to Low)
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
        {sort === "0" // Check if sort value is "0" for low to high price sorting
          ? data
              ?.sort((a, b) => a.cost - b.cost)
              .map((item, index) => <SpotCard key={index} data={item} />)
          : sort === "1" // Check if sort value is "1" for high to low price sorting
          ? data
              ?.sort((a, b) => b.cost - a.cost)
              .map((item, index) => <SpotCard key={index} data={item} />)
          : data?.map((item, index) => <SpotCard key={index} data={item} />)}
      </div>
    </section>
  );
};

export default AllSpots;
