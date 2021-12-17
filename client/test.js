const getData = async () => {
  const response = await fetch("http://awesomedb.xyz/api/v1/exemple/1");
  const result = await response.json();
  console.log(result.req1);
};

getData();
