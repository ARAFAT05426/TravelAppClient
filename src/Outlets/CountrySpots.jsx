import { useLoaderData } from "react-router-dom";
import SpotCard from "../Cards/SpotCard";

const CountrySpots = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <section className="min-h-[calc(100vh-64px)] py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-3 lg:px-28">
            {data?.map((item, inx) => <SpotCard key={inx} data={item} />)}
            </div>
        </section>
    );
};

export default CountrySpots;