"use client";
import "./page.css";
import Counter from "@/components/Counter";
import Header from "@/components/Header";
import Auth from "@/components/Auth";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {auth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}
