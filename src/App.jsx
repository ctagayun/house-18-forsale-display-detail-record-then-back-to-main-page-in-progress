/*
Concepts to Remember:
     Visit this link for the detailed explanation when useEffect fires:

     https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/4b5d269c-f9d9-4c3e-9806-ce1374a69d83/e36f10bb-acb4-4470-ae9e-285eb9031758    
  
 useEffect hook - whenever we use something that's outside the realm of React
  such API interaction, timer interactions, etc gives unpredictable results because it is 
  not PURE FUNCTION. For example api might not be available or 
  encounter error, we need to handle side-effects by useEffect hook.
    To perform an effect in the function component, React automatically 
  runs useEffect hook after running the components pure function and 
  the browser has been updated. 

    useEffect takes functions as paameters. In the fucntion, the effect 
  is performed. For example we can fetch data from an API for example
===============================================
Current Task:
   - added housedetail component
   - display housedetail component when click from houselist
      https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/2e8c1f61-a9fa-48be-9e6c-4636fc0e17e1/95d8a52b-12fc-4acb-937b-e886c968d9b3
   - set another state to display HouseDetail:
       const [selectedHouse, setSelectedHouse] = useState(); 

===============================================
Previous Task: Using Reducer Hook
  
Interview Questions ReducerHook:
  Question: What is useReducer in React?
    Answer: useReducer is a React hook that manages complex 
    state logic in function components by dispatching actions 
    to update state.
      
  Question: How does useReducer differ from useState in React?
    Answer: While useState is simpler for managing individual 
    state variables, useReducer is more suitable for complex state 
    logic where multiple values depend on each other.

  Question: What is the basic structure of the useReducer hook?
    Answer: It returns the current state and a dispatch function 
    for triggering state updates, taking a reducer function and 
    an initial state as arguments.

  Question: What is a reducer function in useReducer?
    Answer: The reducer function is responsible for specifying how 
    the state should change in response to dispatched actions, 
    based on the current state and the action. Reducer function 
    is an argument to ReducerDispatch()

  Question: How is state updated using useReducer?
    Answer: State is updated by dispatching actions, and the reducer 
    function determines the new state based on the current state 
    and the action type.

  Question: Can useReducer replace all use cases of useState in React?
    Answer: While useReducer is powerful, it's not necessary for 
    all scenarios. useState is simpler and more suitable for managing 
    individual state variables. 

====================================================
Prev  Task: - show a loading indicator
     In order to show a loading indicator, one would need to introduce 
     a new stateful value. A boolean called isLoading may be the best solution.

     - When the side-effect which loads the data kicks in, set the stateful 
     boolean to true. Once the data loaded, set the stateful boolean to 
     false again.

     - In JSX, show a "Loading ..." text conditionally when the isLoading 
     boolean is set to true.

===================================================
Prev Task: Inline Handler in JSX:
  Task: The application renders a list of items and allows 
its users to filter the list via a search feature. Next the 
application should render a button next to each list item 
which allows its users to remove the item from the list.
  Optional Hints:

   -The list of items needs to become a stateful value 
   (here: stateful array) with useState in order to manipulate 
   it (e.g. removing an item) later.

   - Every list item renders a button with a click handler. 
   When clicking the button, the item gets removed from the 
   list by manipulating the state.

   - Since the stateful list resides in the App component, 
    one needs to use callback handlers to enable the Item 
    component to communicate up to the App component for 
    removing an item by its identifier.
===============================================================
 Previous Task: Side Effect    
    Note: Whenever we use something that's outside the realm of React
  such API interaction gives unpredictable results because it is 
  not PURE FUNCTION. For example api might not be available or 
  encounter error, we need to handle side-effects by useEffect hook.

    This exercise will implement a feature that will enable Search component
 to remember the most recent searched. 

    Let's implement this feature by using a side-effect to store the recent search 
 from the browser's local storage and retrieve it upon the initial component 
 initialization. First, use the local storage to store the searchTerm accompanied
  by an identifier whenever a user types into the HTML input field:

   What is useEffect?
      - Use useEffect Hook to trigger the desired side-effect each time 
     the searchTerm changes:

      - Use effect automatically runs after React completes running
      the component pure functions and the browser has been updated.
      In the function the "EFFECT" is performed. So we can fetch data
      from an API for example.
 ==============================================================
 Previous Task: React Controlled Components Task:
    - we modified the Search component. We added the value attribute
      
    <div className="float-start ">
            <label htmlFor="search">Search:</label>
            <input id="search" 
              value={props.search} <-- We added the value attribute
              type="text"
              onChange={props.onSearch}/> 
            <p> 
              Searching for <strong>{props.search}</strong>
            </p>
        </div>
    
    Here we added a "value" attribute instead of giving the 
    html element the freedom of keeping track of its internal state.
    Instead React uses state by leveraging the "value" attribute.
    Whenever the HTML search ox element emits change event the NEW VALUE 
    is WRITTEN to React states and RE-RENDERS the component. Then
    the HTML element uses the recent state as value again.
    
    - As a result because of the "value" attribute the input textbox 
      became EXPLICITLY controlled element and Search component became 
      IMPLICITLY a controlled component.

    Interview Questions:
      Question 1: What is a controlled component in React?
        Answer: A controlled component is a component whose 
               FORM elements are controlled by React state. 
                 
      Question 2: How do you create a controlled input in React?
       Answer: Set the input VALUE attribute to a state variable 
       and provide an onChange handler to update the state.

      Question 3: What is the role of the value prop in a controlled input element?
       Answer: The value prop sets the current value of the input, 
       making it a controlled component.

      Question 4: How do you handle a controlled checkbox in React?
         Answer: Use the checked attribute and provide an 
         onChange handler to update the corresponding state.

      Question 5: How do you clear the value of a controlled component?
        Answer: Set the state variable to an empty or null value to 
        clear the value of a controlled component.

      Question 6 : What are the potential downsides of using controlled 
      components?
        Answer: Controlled components can lead to verbose code, 
        especially in forms with many input elements. 
  ===============================================================     
  Previous Tasks:
    - create a search component
    - add code to display only the houses based on the search
      result.
    - add instantiation of Search component in App.jsx

  ===============================================================     
  Previous Task:
     - Create HouseList component
     - see discussion about React state in HouseList component.
     
  ===============================================================     

  Previous Task:
  Setup: 
    npm install bootstrap
    Once the installation is complete, we can include it in our app’s 
    entry file in main.jsx :
    --  Bootstrap CSS
    import "bootstrap/dist/css/bootstrap.min.css";
    -- Bootstrap Bundle JS
    import "bootstrap/dist/js/bootstrap.bundle.min";

    Now since we created the project with Vite, we can rely 
    on Vite's plugins to integrate ESLint properly. Run the 
    following command
       npm install vite-plugin-eslint --save-dev
    */
import * as React from 'react';
import './App.css'
import Header from "./header";
import HouseList from './house/houseList';
import Search from './house/search';
import HouseDetail from '../src/house/housedetail';
import UseHousesHook from "../hooks/useHousesHook";

/*
      At the moment initialHouses is unstateful variable
      To gain control over the list, lets make it stateful.
      By using it as initial state in React's useState Hook. The 
      returned values from the array are the current state (stories) 
      and the state updater function (setStories):
    */
const initialHouses = 
[
    {
      "objectID": 1,
      "address": "12 Valley of Kings, Geneva",
      "country": "Switzerland",
      "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
      "price": 900000,
      "photo": "277667"
    },
    {
      "objectID": 2,
      "address": "89 Road of Forks, Bern",
      "country": "Switzerland",
      "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
      "price": 500000,
      "photo": "462358"
    },
    {
      "objectID": 3,
      "address": "Grote Hof 12, Amsterdam",
      "country": "The Netherlands",
      "description": "This house has been designed and built to an impeccable standard offering luxurious and elegant living. The accommodation is arranged over four floors comprising a large entrance hall, living room with tall sash windows, dining room, study and WC on the ground floor.",
      "price": 200500,
      "photo": "259600"
    },
    {
      "objectID": 4,
      "address": "Meel Kade 321, The Hague",
      "country": "The Netherlands",
      "description": "Discreetly situated a unique two storey period home enviably located on the corner of Krom Road and Recht Road offering seclusion and privacy. The house features a magnificent double height reception room with doors leading directly out onto a charming courtyard garden.",
      "price": 259500,
      "photo": "534182"
    },
    {
      "objectID": 5,
      "address": "Oude Gracht 32, Utrecht",
      "country": "The Netherlands",
      "description": "This luxurious three bedroom flat is contemporary in style and benefits from the use of a gymnasium and a reserved underground parking space.",
      "price": 400500,
      "photo": "164558"
    }
  ];  

    /* The following  is a custom hook that will store the state in a 
     local storage. useStorageState which will keep the component's 
     state in sync with the browser's local storage.

    This custom hook returns
      1. state 
      2. and a state updater function
    and accepts an initial state as argument. 

     This is the custom hook before it was refactored to make it generic:
     const [searchTerm, setSearchTerm] = React.useState(''); 
        1. searchTerm renamed to 'value'
        2. setSearchTerm renamed to 'setValue'
  */
     const useStorageState = (key, initialState) => {
          const [value, setValue] = React.useState(
              localStorage.getItem('key') || initialState 
          );
          
          React.useEffect(() => {
            console.log('useEffect fired. Displaying value of dependency array ' + [ value, key]  );
              localStorage.setItem(key, value);  
              },
              [value, key]   //Dependency array
              ); //EOF useEffect
          
          //the returned values are returned as an array.
          return [value, setValue]; 
      
      } //EOF create custom hook
    
    /* Fetching data. We start off with a function that returns a 
     promise with data in its shorthand version once it resolves. 
     Even though the data should arrive asynchronously when we start the 
     application, it appears to arrive synchronously, because it's rendered 
     immediately. Let's change this by giving it a bit of a realistic delay.
     When resolving the promise, delay it for 2 seconds:
   */
    const getAsyncHouses = () =>
       new Promise((resolve) =>
       setTimeout(
         () => resolve({ data: { houses: initialHouses } }),
       //  2000
       )
     );

const App = () => {

   const welcome = {
     subject: 'List of ',
     title: 'Houses for Sale',
   };
 
  /* Call custom useStorageState hook to assign value to stateOfSearchComponent, 
  setSearchTerm */
  const [stateOfSearchComponent, setSearchTerm] =  useStorageState ( //<-- custom hook
    'search', //key
    '',  //Initial state
    );

  /* Step 1: Steps in using React.useReducer:
      First create a reducer function called housesReducer.
  */
  
   const housesReducer = (state, action) => { //always receives a state 
                                              //and action
      switch (action.type){ //this is what it means by reducer function
                            //specifies how should state change based
                            //on the "action" passed by the reducerDispatch()
        case 'GET_HOUSES':
          const myGetHousesPayload = JSON.stringify(action.payload);
          console.log("Get Houses Payload = " + myGetHousesPayload );
          return action.payload; //specifies how should state change  

        case 'DELETE_HOUSE':
          return state.filter(
            (house) => action.payload.objectID !== house.objectID //specifies how should state change 
          );
        case 'ADD_HOUSE':
          return action.payload;   

        default:
           throw new Error();
      }
       //action is always associated 
       //with a type and "payload".
       
      };

   // Step 2: In using REACT REDUCER:
   //First replace: const [houses, setHouses] = React.useState([]);
   //const[houses, dispatchHouses] = React.useReducer(housesReducer, []); //move to useHouse hook

   //The new function receives a reducer function called "housesReducer"
   //(see line 251)
   //and empty array [] and returns an array with two items:
   //          houses (current state) and
   //          dispatchHouses (state updater function)
   //The updater function updates the state "houses" IMPLICITLY (A)
   //dispatching an "action" for the reducer, The "action" comes with:
   //
   //     1. Type
   //     2. and optional Payload
 
   //Introduce another state called "isLoading" 
   // const [isLoading, setIsLoading] = React.useState(false);

    //Introduce another state called "isError"
    //const [isError, setIsError] = React.useState(false);


  /*Step 3: Handle all functions that modify state. 
     The first state transition function is 
          getAsyncHouses(). 
   
    It is a STATE transition because it fetches the data for the 'house" object.
    Modify useEffect to use "dispatchHouses" reducer function (B)
    We want to start off with an empty list of stories and simulate 
    fetching these stories asynchronously. In a new useEFFECT hook, call the 
    function and resolve the returned promise as a side-effect.*/
    // React.useEffect(() => {  //(B)
    //   //remember the first parameter to useEffect 
    //   //are function(s)
    //   setIsLoading(true);
    //   getAsyncHouses() 
    //    .then(result => { 
    //       dispatchHouses({     
    //              type: 'GET_HOUSES',   
    //            payload: result.data.houses,  
    //            });
    //            setIsLoading(false);
    //           }) 
    //         .catch(() => setIsError(true));
    //     }, []);  
    
  const houses = UseHousesHook(housesReducer);

 // const myHouses = JSON.stringify(houses);

  //console.log("Houses returned by UseHousesHook= " + houses);

  const handleRemoveHouse = (item) => { 
       // const newHouses = houses.filter(   <== MOVE THIS LOGIC TO  HouseReducer()
       //  (house) => item.objectID !== house.objectID
       // );
      dispatchHouses({    //The second state transition that we need to handle is
                          //the DELETE record. This replaced setHouses(newHouses);
                          //Now add the TYPE and PAYLOAD and the business logic 
                          //to the HouseReducer() function to cover this new case.
        type: 'DELETE_HOUSE',
        payload: item,
      });
    };
  
  /*STEP 5:The third state transition we want to handle using  
     dispatchHouses() reducer function is: 
          handleAddHouse()  
    It is another state transition because it deletes a record.
   */

  const handleAddHouse = (item) => { 

    dispatchHouses({
      type: 'ADD_HOUSE',  //TYPE
      payload: [...houses,      //contains the searchedHouses state
      {                         //the below records will be appended to the end of ...houses
        objectID: 9,
        address: "1456 Riverside Road",
        country: "USA",
        price: 25000000
      },
      {      //the below record will be appended to the end of ...list
        objectID: 10,
        address: "1196 Justus Road",
        country: "USA",
        price: 0
      }, 
       ] }        
    );

  }
  const handleSearch = (event) => {
      setSearchTerm(event.target.value); 
   };

  //"houses" is the array of houses newly created by the filter() method.
  const searchedHouses = houses.filter((house) =>
      house.country.toLowerCase().includes(stateOfSearchComponent.toLowerCase())
    );

   //Introduce another state for displaying HouseDetail.
   //I am not passing initial value that means selectedHouse 
   //will be initially undefined.
   const [selectedHouse, setSelectedHouse] = React.useState(); 

   //This wrapper is passed as props to HouseList instead of 
   //setSelectedHouse. The advantage of this approach is that 
   //the App component still retains and control its own state.
   const setSelectedHouseWrapper = (house) => {
     setSelectedHouse(house);
   }

  return (
    <>
     <Header  headerText={welcome} />   
    
      {isError && <p>Error in fetching data...</p>}
      
      {selectedHouse ? (
          <HouseDetail house={selectedHouse} />  //if truthy display detail
        ) : (           
          <>  
           <Search   //since you are returning two components, enclosed it in a fragment
              id="search"
              value={stateOfSearchComponent}
              isFocused //pass imperatively a dedicated  prop. isFocused as an attribute is equivalent to isFocused={true}
              onInputChange={handleSearch}
              >
              <strong>Search:</strong>
              </Search>
              <br></br>         
          <HouseList list={searchedHouses} //if falsy display HouseList
                      onRemoveHouse={handleRemoveHouse} 
                      onAddHouse={handleAddHouse} 
                      //selectedHouseSetter= {setSelectedHouse}
                      selectedHouseSetter= {setSelectedHouseWrapper}/> 
          </>
        )}

    </>
 )}

export default App