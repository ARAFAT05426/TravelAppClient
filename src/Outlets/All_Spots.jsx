import SpotCard from "../Cards/SpotCard";
import useRefetch from "../Hooks/UseRefetch";

const All_Spots = () => {
    const {data} = useRefetch(`http://localhost:5426/spots`)
    console.log(data);
    return (
        <section className="py-10">
            <div className="grid grid-cols-3 gap-y-10">
                {
                    data?.map((item, inx) => <SpotCard key={inx} data={item}/>)
                }
            </div>
        </section>
    );
};

export default All_Spots;