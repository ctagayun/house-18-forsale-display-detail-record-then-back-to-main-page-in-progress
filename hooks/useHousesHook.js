//A hook is like a componen but it doesn't return 
//a JSX
//Reference https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/2e8c1f61-a9fa-48be-9e6c-4636fc0e17e1/699b12ad-3a00-4f60-a782-319b69da44da

import * as React from 'react';

const UseHousesHook = (housesReducer) => {

   const[houses, dispatchHouses] = React.useReducer(housesReducer, []);

    //Introduce another state called "isLoading" 
    const [isLoading, setIsLoading] = React.useState(false);

    //Introduce another state called "isError"
    const [isError, setIsError] = React.useState(false);
  
    React.useEffect(() => {  //(B)
        //remember the first parameter to useEffect 
        //are function(s)
        setIsLoading(true);
        getAsyncHouses() 
         .then(result => { 
            dispatchHouses({     
                   type: 'GET_HOUSES',   
                 payload: result.data.houses,  
                 
                 });
                 setIsLoading(false);
                }) 
              .catch(() => setIsError(true));
          }, []);  
      console.log("Set is error = " + isError);
      const myHouses = JSON.stringify(houses);

      console.log("Houses returned by UseHouseHook= " + myHouses);

    //the hook now can return the "houses" state
    return houses, isError, isLoading ;
  
}

export default UseHousesHook;