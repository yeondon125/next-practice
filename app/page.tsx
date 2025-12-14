"use client";

import { useEffect, useState } from "react";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/posts`);
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((data: any) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
}
