import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/firebase.config";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const ExtraLogin = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleGithubSignIn = () =>{

        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <h2 className='text-2xl font-bold my-5 text-center'>Continue With</h2>
            {
                user ? <button onClick={handleGoogleSignOut} className='btn btn-outline w-full text-[15px] font-bold'>Google LogOut<FaGoogle className='text-xl text-white'></FaGoogle></button> :
                <>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-[15px] font-bold my-2'>
                        <FaGoogle className='text-xl text-white'></FaGoogle>Google Login
                    </button>
                    
                </>
            }
            {   
                user &&
                <div>
                    <h3 className='text-xl font-bold text-center'>User: {user?.displayName}</h3>
                    <p className='text-xl font-bold text-center'>Email: {user?.email}</p>
                    <img className='mx-auto' src={user?.photoURL} alt="" />
                </div>
            }
            <button onClick={handleGithubSignIn} className='btn btn-outline w-full text-[15px] font-bold'>
                <FaGithub className='text-xl text-white'></FaGithub>Github Login
            </button>
        </div>
    );
};

export default ExtraLogin;