import UseRefetch from "../Hooks/UseRefetch";
import useCallContext from "../Hooks/useCallContext";
import Loader from "../Sections/Loader/Loader";
import Swal from "sweetalert2";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const MyList = () => {
  const { user } = useCallContext();
  const { data, loading, refetch } = UseRefetch(
    `http://localhost:5426/myList/${user?.email}`
  );
  const handleDelete = (id) => {
    Swal.fire({
      background: "#CDD4DB",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5426/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((dt) => console.log(dt));
        refetch();
        Swal.fire({
          background: "#CDD4DB",
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  // Check if data is not an array or loading is true
  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-10 min-h-[calc(100vh-64px)]">
      <div></div>
      <div className="px-2 lg:px-28">
        <table className="border-collapse text-left w-full px-5 py-3">
          <thead>
            <tr className="px-5">
              <th className="text-nav_bg px-5 py-2 border font-semibold text-sm lg:text-xl text-wrap">
                Id
              </th>
              <th className="text-nav_bg px-5 py-2 border font-semibold text-sm lg:text-xl text-wrap">
                Tourist Spot Name
              </th>
              <th className="text-nav_bg px-5 py-2 border font-semibold text-sm lg:text-xl text-wrap">
                Country Name
              </th>
              <th className="text-nav_bg px-5 py-2 border font-semibold text-sm lg:text-xl text-wrap">
                Visitor
              </th>
              <th className="text-nav_bg px-5 py-2 border font-semibold text-sm lg:text-xl text-wrap">
                Edit
              </th>
              <th className="text-nav_bg px-5 py-2 border font-semibold text-sm lg:text-xl text-wrap">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td className="text-nav_bg px-5 py-2 border font-semibold text-xs lg:text-lg text-wrap">
                  {index + 1}
                </td>
                <td className="text-nav_bg px-5 py-2 border font-semibold text-xs lg:text-lg text-wrap">
                  {item?.spot_Name}
                </td>
                <td className="text-nav_bg px-5 py-2 border font-semibold text-xs lg:text-lg text-wrap">
                  {item?.cName}
                </td>
                <td className="text-nav_bg px-5 py-2 border font-semibold text-xs lg:text-lg text-wrap">
                  {item?.visitor}
                </td>
                <td className="text-nav_bg px-5 py-2 border font-semibold text-xs lg:text-lg text-wrap">
                  <button className="p-1 bg-nav_bg rounded">
                    <Link to={`/updateSpot/${item?._id}`}>
                      <LuFileEdit className="text-xl " />
                    </Link>
                  </button>
                </td>
                <td className="text-nav_bg px-5 py-2 border font-semibold text-xs lg:text-lg text-wrap">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="p-1 bg-nav_bg rounded"
                  >
                    <MdOutlineDeleteOutline className="text-xl " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyList;
