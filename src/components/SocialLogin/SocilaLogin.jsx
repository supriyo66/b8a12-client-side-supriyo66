
import { AiOutlineGoogle } from 'react-icons/ai';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {

    const {googleSignIn}=useAuth()

    const handleGoogle=()=>{
        googleSignIn()
        .then(res=>{
            console.log(res.user)
        })
    }
    return (
        <div>
            <div>
            <button onClick={handleGoogle} className="btn">
  <AiOutlineGoogle></AiOutlineGoogle>
  Google SignIn
</button>
            </div>
        </div>
    );
};

export default SocialLogin;