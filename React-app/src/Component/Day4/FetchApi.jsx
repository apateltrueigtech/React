import React,{useState, useEffect} from 'react'
function App(){
    const [data, setData] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  const result = await response.json();
                  setData(result); // Set the fetched data
                } catch (error) {
                  setError(error.message); // Handle errors
                } finally {
                  setLoading(false); // Turn off loading state
                }
              };
          
              fetchData(); // Call the fetch function
            }, []); // Empty dependency array ensures this runs only once
          
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error: {error}</div>;
          
            return (
              <div>
                <h1>Fetched Data</h1>
                <ul>
                  {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
            );
          }
          
          export default App;
            

