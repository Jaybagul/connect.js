import React, { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {

  const [data, setdata] = useState([])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/getdata")
    setdata(res.data);
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
