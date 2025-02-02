"use client";
import "./page.css";
import Counter from "@/components/Counter";
import Header from "@/components/Header";
import Auth from "@/components/Auth";

export default function Home() {
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}
