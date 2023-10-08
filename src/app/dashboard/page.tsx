"use client";
import useSWR from "swr";

const Dashboard = () => {
  // const [data,setData] = useState([])
  // const [err,setError] = useState(false)
  // const [loading,setLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setError(true)
  //     }

  //     const jsonData = await res.json()
  //     setData(jsonData)
  //     setLoading(false)
  //   }

  //   getData()
  // },[])

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);
  return <div className="h-[calc(100vh-100px)]">Dashboard</div>;
};
export default Dashboard;
