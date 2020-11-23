import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  // params is an [] that matches everything after
  // ex: /notes/1/2/3/4
  // params = ["1", "2", "3", "4"]
  // this will allow you to write a route like "/notes/:id/:id/:id"
  const { params } = router.query;
  console.log(params);

  return <h1>Note: {params}</h1>;
};

export default Page;
