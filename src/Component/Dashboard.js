import React, { useEffect, useState } from "react";
import Login from "./Login";
import axios from "axios";



const Dashboard = (props) => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    debugger
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products)
      console.log(response, "response")
    } catch (error) {
      debugger
      console.log(error, "error")
    }
  }

  const titleList = data.map((target) => (
    <div key={target.id}>
      <li>{target.title}</li>
    </div>
  ));

  return (
    <ul>{titleList}</ul>
  )
}

export default Dashboard