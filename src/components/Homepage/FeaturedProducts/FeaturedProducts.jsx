"use client";
import React, { useEffect, useState } from "react";

export default function FeaturedProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);

  return <div></div>;
}
