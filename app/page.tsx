import { useEffect, useState } from "react";

export default function Main() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
        method: "GET",
      });
      const data = (await res.json()).title;
      setData(data);
    };

    fetchData();
  }, []);

  return <div>{data}</div>;
}
