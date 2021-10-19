import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import { useHistory } from 'react-router-dom';

initializeAuthentication();


const useFirebase =()=>{
    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const [email, setEmail]= useState('');
    
    const [password, setPassword]= useState('');
    const [loading, setLoading] = useState(true)
   
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // email and password 

    const handleregistration = e =>{
        e.preventDefault()
          if(password.length< 6){
              setError('Password Must be 6 Character long')
              return;
          }
        
        else {
          registerNewUser(email,password)
        }
      }

      const registerNewUser = (email, password)=>{
   
        createUserWithEmailAndPassword(auth,email, password)
        .then(result=>{
            const user = result.user;
            setError('')
           
            })   
    
       .catch(error=>{
           setError(error.message)
       })
      }


    





    const handleEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    // const handleName = e => {
    //     console.log(e.target.value);
    //     setName(e.target.value);
    // }
    const handlePassword = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
  
  const signInUsingGoogle =()=>{
   return signInWithPopup(auth, provider)
   .catch(error=>{
    setError(error.message)
})
    .finally(()=>{setLoading(false)});
    // .then((result) => {
    //    setUser (result.user);
    //    console.log(result.user)
//   })
 
  }

  const logOut = ()=>{
      setLoading(true)
      signOut(auth)
      .then(()=>{
        setUser({});
       
      })
      
      .finally(()=>{setLoading(false)}); 
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
}, [])


  useEffect(()=>{
      onAuthStateChanged(auth, user=>{
        if(user){
          setUser(user)
        }
      })
  }, [])


  return {
      user,
      error,
      loading,
      handleregistration,
      email,
      password,
      signInUsingGoogle,
      handlePassword,
      handleEmail,
      logOut,
      
      
    
     

  }
}

export default useFirebase;