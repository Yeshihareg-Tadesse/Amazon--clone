import { useContext, useEffect } from 'react';
import Routing from './Router.jsx'; 
import { DataContext } from './Components/DataProvider/DataProvider.jsx'; 
import { Type } from './Utility/Action.type.jsx'; 
import { auth } from './Utility/Firebase.jsx'; 

function App() {
  const [ dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null
        });
      }
    });

  }, [dispatch]);


  return (
    <>
      <Routing />
    </>
  );
}

export default App;
