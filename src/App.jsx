import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar';
import UsersGrid from './Components/UsersGrid';
import StatusMessage from './Components/StatusMessage';

function App() {
  const [users, setUsers] =useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedUserId, setSelectedUserId] = useState("all");

  // function to fetch data but before whih I will switch the loading to true  then turn it off after data comes back everything been equal
     async function fetchUsers() {
      // use try, catch and finally 
      try {
        // turn loading to true and no error yet
        setLoading(true)
        setError("")
        setUsers([])

        // delay loading for 2 seconda
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });


        // Now fetch the data
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");

        // throw an  error if issue with the API else skip code and proceed
        if (!response.ok) {
          throw new Error("failed to fetch data");
          
        }
        // if data comes back, Convert the response to json() and store in data 
        const data = await response.json();
        // update posts with recent data or store the returned data in post so Posts should now hold the data 
        setUsers(data)
        console.log(data)
      } catch (error) {
        setError("Something went wrong please try again")
        
      } finally {
        // turn off loading
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchUsers()
    }, [])


    // Fetch and filter logic 
    const filteredUsers =  users.filter((user) => {
      // convert what ever is type in the search field to lower case and store in a variable (search)
   
    const search = searchTerm.toLowerCase();
    // convert either searched title and or  body into lower cases and store in a matchsearch variable

    const matchesSearch = 
      user.title.toLowerCase().includes(search) || user.body.toLowerCase().includes(search);

    // logic for filterring by either all users or selected userIDs and store in a marchesUser
    const matchesUser = 
      selectedUserId === "all" || user.userId === Number(selectedUserId);

    // return both matchessearch and matchesUser if all conditions above are met

    return matchesSearch && matchesUser; 

    })


    // Generate user IDS from the backend API and store in userIds variable 
    // Note the API returns duplicate ids so i will use [...new Set()] object method which is a javascript tool to return single ids instead of duplicate ids and concert it back to an array since new set is an object.

    const userIDs = [...new Set(users.map((user) => user.userId))]; 


  


  return (
    <>
      <Header users = {users.length} setUsers = {setUsers} />
      <div style={{display: "flex", gap:"10px", justifyContent: "center"}}>
        <SearchBar searchTerm = {searchTerm} setSearchTerm ={setSearchTerm} />
        <FilterBar userids = {userIDs} selectedUserId = {selectedUserId} setSelectedUserId = {setSelectedUserId} />
        <button style={{borderRadius: "10px", padding: "10px"}} onClick={fetchUsers}>Refresh users information</button>  
      </div>
          
      <StatusMessage  loading={loading} setLoading ={setLoading} error={error} setError = {setError} />
      <UsersGrid  users ={filteredUsers} setUsers = {setUsers}  />

      
       
    </>
  );
}

export default App
