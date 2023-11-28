
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BookItem from "../../BookItem/BookItem";
import useMenu from "../../../Hooks/useMenu";


const PopularBooks = () => {
   const [menu]=useMenu()
   const popular=menu.filter(item=>item.category === 'Popular')



    
    return (
        <section className="bg-slate-100 p-4  rounded">
            <SectionTitle heading='FROM OUR BOOKS'
            subHeading='popular books'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
               {
                 popular.map(item => <BookItem key={item._id} item={item}></BookItem>)
               }
            </div>
        </section>
    );
};

export default PopularBooks;