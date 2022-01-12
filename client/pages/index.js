import { useState, useEffect } from "react";

export default function Home() {
  const [data, setdata] = useState();
  const [error, seterror] = useState();
  const [loading, setloading] = useState(false);

  const test = async () => {
    setloading(true);
    const request = await fetch("http://awesomedb.xyz/api/v1/exemple/1");
    if (!request.ok) {
      seterror(true);
      setloading(false);
      return;
    }
    setdata(await request.json());
    setloading(false);
  };

  useEffect(() => {
    test();
  }, []);
  return (
    <>
      {error && <p>Error !</p>}
      {loading && <p>loading</p>}
      <ul>
        {data &&
          data.req1.map((info, index) => (
            <li key={index}>{info.Titre_Original}</li>
          ))}
      </ul>
    </>
  );
}
