
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center mt-10 flex flex-col items-center justify-center">
         <img className='w-2/4 mx-auto mt-2' src='https://i.ibb.co/BwX0WF3/a12.jpg'></img>
         <p className='-mt-12 text-white text-xl font-md'>page not found</p>
        
        
        <Link to="/" className="btn btn-ghost bg-slate-500 mt-7">Go Back</Link>
        
      </div>
    );
};

export default Error;