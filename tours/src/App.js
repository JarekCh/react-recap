import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const resp = await fetch(url);        
      const tours = await resp.json();
      setLoading(false);
      setTours(tours);
    } catch(err) {
      console.log(err);      
    }
  }  

  useEffect(() => {
    fetchTours()
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return <main>
    <Tours tours={tours}/>
  </main>
}

export default App
