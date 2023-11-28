import { Link } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import Cover from "../Shared/Cover/Cover";


const MenuCategory = ({items,title,img}) => {
    return (
        <div>
            {
             title &&   <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-3 py-5 px-5 gap-4">
               {
                 items.map(item => <BookItem key={item._id} item={item}></BookItem>)
               }
            </div>
            <div className="flex justify-center items-center mb-10 ">
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline text-black bg-slate-200 border-0 border-b-2 ">ORDER YOUR FAVOURITE BOOK</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;