"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);
  return <div className="h-[calc(100vh-100px)]">Dashboard</div>;
};
export default Dashboard;
