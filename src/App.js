import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

function App() {
  let [user, setuser] = useState([]);
  let dataUserFrom = collection(db, "user")

  useEffect(() => {
    let storeUser = async () => {
      let userInfo = await
        getDocs(dataUserFrom);
      // console.log(userInfo.docs);
      userInfo.docs.map(item => console.log(item.data()))
      setuser(userInfo.docs.map(item => (item.data())))
    }
    storeUser()
  }, [])
  return (
    <>
      {user.map(sinfo => (
        <div>
          <h1>{info.name}</h1>
          <h1>{info.age}</h1>
          <h1>{info.gender}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
