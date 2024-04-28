import UseRefetch from "../Hooks/UseRefetch";
import useCallContext from "../Hooks/useCallContext";
import Loader from "../Sections/Loader/Loader";

const MyList = () => {
  const { user } = useCallContext();
  const { data, loading } = UseRefetch(
    `http://localhost:5426/myList/${user?.email}`
  );

  // Check if data is not an array or loading is true
  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-10">
      <div></div>
      <div className="px-28">
        <table className="border border-nav_bg border-collapse text-left w-full px-5 py-3">
          <thead>
            <tr className="border-b border-nav_bg px-5">
              <th className="text-nav_bg px-5 py-1">Id</th>
              <th className="text-nav_bg px-5 py-1">Tourist Spot Name</th>
              <th className="text-nav_bg px-5 py-1">Country Name</th>
              <th className="text-nav_bg px-5 py-1">Visitor</th>
              <th className="text-nav_bg px-5 py-1">Edit</th>
              <th className="text-nav_bg px-5 py-1">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.cName}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyList;
