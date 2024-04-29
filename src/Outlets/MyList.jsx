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
    `https://assignment-10-plum.vercel.app/myList/${user?.email}`
  );

  const handleDelete = (id) => {
    Swal.fire({
      background: "#CDD4DB",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#446680",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-plum.vercel.app/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((dt) => {
            console.log(dt)
            refetch();
          });
        Swal.fire({
          background: "#CDD4DB",
          title: "Deleted!",
          text: `Your tourist spot has been deleted.`,
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-10 min-h-[calc(100vh-64px)]">
      <div></div>
      <div className="px-2 lg:px-28">
        <table className="min-w-full bg-white/75 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs leading-4">
            <tr>
              <th className="py-2 text-nav_bg px-1 md:px-3 lg:px-4 text-left">Id</th>
              <th className="py-2 text-nav_bg px-1 md:px-3 lg:px-4 text-left">Tourist Spot Name</th>
              <th className="py-2 text-nav_bg px-1 md:px-3 lg:px-4 text-left">Country Name</th>
              <th className="py-2 text-nav_bg px-1 md:px-3 lg:px-4 text-left">Visitors</th>
              <th className="py-2 text-nav_bg px-1 md:px-3 lg:px-4 text-center">Edit</th>
              <th className="py-2 text-nav_bg px-1 md:px-3 lg:px-4 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-xs font-light">
            {data?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 text-nav_bg px-1 md:px-3 lg:px-4 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 text-nav_bg px-1 md:px-3 lg:px-4 text-left">{item?.spot_Name}</td>
                <td className="py-3 text-nav_bg px-1 md:px-3 lg:px-4 text-left">{item?.cName}</td>
                <td className="py-3 text-nav_bg px-1 md:px-3 lg:px-4 text-left">{item?.visitor}</td>
                <td className="py-3 text-nav_bg px-1 md:px-3 lg:px-4 text-center">
                  <Link to={`/updateSpot/${item?._id}`}>
                    <button className="bg-btn_bg text-white py-1 px-2 rounded-lg">
                      <LuFileEdit className="text-lg" />
                    </button>
                  </Link>
                </td>
                <td className="py-3 text-nav_bg px-1 md:px-3 lg:px-4 text-center">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-lg"
                  >
                    <MdOutlineDeleteOutline className="text-lg" />
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
