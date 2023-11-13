import "./stylesheets/homepage.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <video autoPlay muted loop className="backgroundVideo">
        <source src="/videos/backgroundVideo.mp4" type="video/mp4" />
      </video>

      <Image
        src="/images/mobileLogo.png"
        alt="Cookie Company Logo"
        className="logo m-3"
        width={300}
        height={300}
        priority
      />

      <button className="orderBtn">Order Now</button>

      <h1 className="">Orders now open November 17th - December 22nd</h1>
    </main>
  );
}
