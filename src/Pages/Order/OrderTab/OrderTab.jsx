import BookCard from "../../../components/BookCard/BookCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
    {items.map(item=><BookCard key={item._id} item={item}></BookCard>)}
    </div>
    );
};

export default OrderTab;