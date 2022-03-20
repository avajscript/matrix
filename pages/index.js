import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchPage from "./search";
export default function Home() {
  return (
    <div>
      <SearchPage />
    </div>
  );
}
