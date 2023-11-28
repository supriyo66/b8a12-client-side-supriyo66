

const BookItem = ({item}) => {
    const {name,image,about,price}=item
    return (
        <div className="flex space-x-6 mb-10 mt-10">
             <img  className="w-[120px]" src={image}  />
            <div>
                <h2 className="uppercase text-xl font-bold">{name}---</h2>
                <p className="font-md">{about}</p>
                <p className="text-yellow-700 font-medium py-4">Price: ${price}</p>
            </div>
           
            
            
            
            
        </div>
    );
};

export default BookItem;