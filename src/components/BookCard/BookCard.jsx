import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const BookCard = ({ item }) => {
  const { name, image, about, price, _id } = item;
  const { user } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch]=useCart()

  const handleBook = (book) => {
    console.log(book);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
          
        }
      });
    } else {
      Swal.fire({
        title: "Please log in first",
        text: "Need to log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { pathname: location.pathname } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl mt-10">
        <figure className="">
          <img className="w-full h-[300px]" src={image} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 bg-slate-700 text-yellow-500 p-0.5 rounded">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleBook(item)} className="btn btn-outline border-0 border-b-2 mt-5 border-orange-400 ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
