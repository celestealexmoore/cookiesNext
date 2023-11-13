import "./stylesheets/section.css";

export default function Section() {
  return (
    <main
      className="flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
        
      <h1>Hello World</h1>

      <button className="orderBtn">Order Now</button>

      <h1 className="">Orders now open November 17th - December 22nd</h1>
    </main>
  );
}
