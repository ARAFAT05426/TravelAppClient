import { useState } from "react";
import SpotCard from "../Cards/SpotCard";
import useRefetch from "../Hooks/UseRefetch";
import Loader from "../Sections/Loader/Loader";

const AllSpots = () => {
  const { data, loading } = useRefetch(
    `https://assignment-10-plum.vercel.app/spots`
  );
  const [sort, setSort] = useState(null);

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="py-5">
      <div className="flex items-center py-7 justify-center">
        <select
          onChange={handleSortChange}
          className="px-5 py-3 bg-btn_bg"
          name="order"
        >
          <option className="text-nav_bg" value="0">
            Sort by Price (Low to High)
          </option>
          <option className="text-nav_bg" value="1">
            Sort by Price (High to Low)
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
        {sort === "0"
          ? data
              ?.sort((a, b) => a.cost - b.cost)
              .map((item, index) => <SpotCard key={index} data={item} />)
          : sort === "1"
          ? data
              ?.sort((a, b) => b.cost - a.cost)
              .map((item, index) => <SpotCard key={index} data={item} />)
          : data?.map((item, index) => <SpotCard key={index} data={item} />)}
      </div>
    </section>
  );
};

export default AllSpots;
